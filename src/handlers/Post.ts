import {TwirpContext} from "twirp-ts";
import {CreatePostRequest, CreatePostResponse, GetPostsRequest, GetPostsResponse} from "../protos/service";
import {PanoAPITwirp} from "../protos/service.twirp";
import {prisma} from "../index";
import {slugify} from "../support/Helper";

const GetPosts = async (ctx: TwirpContext, request: GetPostsRequest): Promise<GetPostsResponse> => {
    return GetPostsResponse.fromJson({
        posts: [
            {
                id: 'test',
                title: 'test',
                url: 'test',
                content: 'test',
                slug: 'test',
                userId: 'test',
            }
        ]
    })
}

const CreatePost = async (ctx: TwirpContext, request: CreatePostRequest): Promise<CreatePostResponse> => {
    try {
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
    } catch (e) {
        throw e
    }
}

export default {
    GetPosts,
    CreatePost
} as PanoAPITwirp