import {TwirpContext} from "twirp-ts";
import {
    CreatePostRequest,
    CreatePostResponse, DeletePostRequest, DeletePostResponse,
    GetBatchPostsRequest,
    GetBatchPostsResponse,
    GetPostsRequest,
    GetPostsResponse,
    UpdatePostRequest,
    UpdatePostResponse
} from "../protos/service";
import {PanoAPITwirp} from "../protos/service.twirp";
import {prisma} from "../index";
import {slugify} from "../support/Helper";

const CreatePost = async (ctx: TwirpContext, request: CreatePostRequest): Promise<CreatePostResponse> => {
    const post = await prisma.post.create({
        data: {
            title: request.title,
            slug: slugify(request.title),
            url: request.url,
            content: request.content,
            userID: request.userId
        }
    })

    return CreatePostResponse.fromJson({
        post: {
            id: post.id,
            title: post.title,
            url: post.url,
            content: post.content,
            slug: post.slug,
            user_id: post.userID
        }
    })
}

const GetPosts = async (ctx: TwirpContext, request: GetPostsRequest): Promise<GetPostsResponse> => {
    const posts = await prisma.post.findMany({
        ...(request.limit ? {take: request.limit} : {}),
        ...(request.offset ? {skip: request.offset} : {})
    })

    return GetPostsResponse.fromJson({
        posts: posts.map(post => ({
            id: post.id,
            title: post.title,
            url: post.url,
            content: post.content,
            slug: post.slug,
            user_id: post.userID
        }))
    })
}

const GetBatchPosts = async (ctx: TwirpContext, request: GetBatchPostsRequest): Promise<GetBatchPostsResponse> => {
    const posts = await prisma.post.findMany({
        where: {
            id: {
                in: request.ids
            }
        }
    })

    return GetPostsResponse.fromJson({
        posts: posts.map(post => ({
            id: post.id,
            title: post.title,
            url: post.url,
            content: post.content,
            slug: post.slug,
            user_id: post.userID
        }))
    })
}

const UpdatePost = async (ctx: TwirpContext, request: UpdatePostRequest): Promise<UpdatePostResponse> => {
    const updatePost = await prisma.post.update({
        where: {
            id: request.id
        },
        data: {
            ...(request.title ? {
                title: request.title.value,
                slug: slugify(request.title.value)
            } : {}),
            ...(request.url ? {
                url: request.url.value,
            } : {}),
            ...(request.content ? {
                content: request.content.value,
            } : {}),
        }
    })

    return UpdatePostResponse.fromJson({})
}

const DeletePost = async (ctx: TwirpContext, request: DeletePostRequest): Promise<DeletePostResponse> => {
    const deletePost = await prisma.post.delete({
        where: {
            id: request.id
        }
    })

    return DeletePostResponse.fromJson({})
}

export default {
    CreatePost,
    GetPosts,
    GetBatchPosts,
    UpdatePost,
    DeletePost
} as PanoAPITwirp