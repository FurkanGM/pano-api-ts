import { PanoAPITwirp } from "../protos/service.twirp"
import { TwirpContext } from "twirp-ts"
import {
  CreateCommentRequest,
  CreateCommentResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  GetBatchCommentsRequest,
  GetBatchCommentsResponse,
  GetCommentsRequest,
  GetCommentsResponse,
  UpdateCommentRequest,
  UpdateCommentResponse,
} from "../protos/service"
import { prisma } from "../index"

const CreateComment = async (
  ctx: TwirpContext,
  request: CreateCommentRequest
): Promise<CreateCommentResponse> => {
  const comment = await prisma.comment.create({
    data: {
      content: request.content,
      userID: request.userId,
      postID: request.postId,
      parentID: request.parentId?.value,
    },
  })

  return CreateCommentResponse.fromJson({
    comment: {
      id: comment.id,
      content: comment.content,
      userId: comment.userID,
      postId: comment.postID,
      parentId: comment.parentID,
    },
  })
}

const GetComments = async (
  ctx: TwirpContext,
  request: GetCommentsRequest
): Promise<GetCommentsResponse> => {
  const comments = await prisma.comment.findMany({
    ...(request.limit ? { take: request.limit } : {}),
    ...(request.offset ? { skip: request.offset } : {}),
  })

  return GetCommentsResponse.fromJson({
    comments: comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      userId: comment.userID,
      postId: comment.postID,
      parentId: comment.parentID,
    })),
  })
}

const GetBatchComments = async (
  ctx: TwirpContext,
  request: GetBatchCommentsRequest
): Promise<GetBatchCommentsResponse> => {
  const comments = await prisma.comment.findMany({
    where: {
      id: {
        in: request.ids,
      },
    },
  })

  return GetBatchCommentsResponse.fromJson({
    comments: comments.map((comment) => ({
      id: comment.id,
      content: comment.content,
      userId: comment.userID,
      postId: comment.postID,
      parentId: comment.parentID,
    })),
  })
}

const UpdateComment = async (
  ctx: TwirpContext,
  request: UpdateCommentRequest
): Promise<UpdateCommentResponse> => {
  const updateComment = await prisma.comment.update({
    where: {
      id: request.id,
    },
    data: {
      content: request.content,
    },
  })

  return UpdateCommentResponse.fromJson({})
}

const DeleteComment = async (
  ctx: TwirpContext,
  request: DeleteCommentRequest
): Promise<DeleteCommentResponse> => {
  const deleteComment = await prisma.comment.delete({
    where: {
      id: request.id,
    },
  })

  return DeleteCommentResponse.fromJson({})
}

export default {
  CreateComment,
  GetComments,
  GetBatchComments,
  UpdateComment,
  DeleteComment,
} as PanoAPITwirp
