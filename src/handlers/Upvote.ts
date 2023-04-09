import {PanoAPITwirp} from "../protos/service.twirp";
import {TwirpContext} from "twirp-ts";
import {
    CreateUpvoteRequest,
    CreateUpvoteResponse,
    DeleteUpvoteRequest,
    DeleteUpvoteResponse,
    GetUpvotesRequest,
    GetUpvotesResponse,
    IsUpvotedRequest,
    IsUpvotedResponse
} from "../protos/service";
import {prisma} from "../index";

const CreateUpvote = async (ctx: TwirpContext, request: CreateUpvoteRequest): Promise<CreateUpvoteResponse> => {
    const upvote = request.entityType === 'post' ? (
        await prisma.upvote.create({
            data: {
                postID: request.entityId,
                userID: request.userId
            }
        })
    ) : (
        await prisma.commentUpvote.create({
            data: {
                commentID: request.entityId,
                userID: request.userId
            }
        })
    )

    return CreateUpvoteResponse.fromJson({
        upvote: {
            id: upvote.id,
            entityId: request.entityId,
            entityType: request.entityType,
            userId: upvote.userID,
        }
    })
}

const GetUpvotes = async (ctx: TwirpContext, request: GetUpvotesRequest): Promise<GetUpvotesResponse> => {
    let upvotes
    if (request.entityType === 'post') {
        upvotes = await prisma.upvote.findMany({
            where: {
                postID: request.entityId
            }
        })
    } else {
        upvotes = await prisma.commentUpvote.findMany({
            where: {
                commentID: request.entityId
            }
        })
    }

    return GetUpvotesResponse.fromJson({
        upvotes: upvotes.map((upvote) => ({
            id: upvote.id,
            entityId: request.entityId,
            entityType: request.entityType,
            userId: upvote.userID
        }))
    })
}

const DeleteUpvote = async (ctx: TwirpContext, request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse> => {
    if (request.entityType === 'post') {
        const upvotes = await prisma.upvote.deleteMany({
            where: {
                postID: request.entityId,
                userID: request.userId
            }
        })
    } else {
        const upvotes = await prisma.commentUpvote.deleteMany({
            where: {
                commentID: request.entityId,
                userID: request.userId
            }
        })
    }

    return DeleteUpvoteResponse.fromJson({})
}

const IsUpvoted = async (ctx: TwirpContext, request: IsUpvotedRequest): Promise<IsUpvotedResponse> => {
    let isUpvoted: boolean

    if (request.entityType === 'post') {
        const upvotes = await prisma.upvote.findMany({
            where: {
                postID: request.entityId,
                userID: request.userId
            }
        })

        isUpvoted = upvotes.length > 0
    } else {
        const upvotes = await prisma.commentUpvote.findMany({
            where: {
                commentID: request.entityId,
                userID: request.userId
            }
        })

        isUpvoted = upvotes.length > 0
    }

    return IsUpvotedResponse.fromJson({
        isUpvoted
    })
}

export default {
    CreateUpvote,
    GetUpvotes,
    DeleteUpvote,
    IsUpvoted,
} as PanoAPITwirp