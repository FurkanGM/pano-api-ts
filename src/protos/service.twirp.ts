import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts"
import {
  GetBatchPostsRequest,
  GetBatchPostsResponse,
  GetPostsRequest,
  GetPostsResponse,
  CreatePostRequest,
  CreatePostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
  DeletePostRequest,
  DeletePostResponse,
  GetBatchCommentsRequest,
  GetBatchCommentsResponse,
  GetCommentsRequest,
  GetCommentsResponse,
  CreateCommentRequest,
  CreateCommentResponse,
  UpdateCommentRequest,
  UpdateCommentResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  GetUpvotesRequest,
  GetUpvotesResponse,
  CreateUpvoteRequest,
  CreateUpvoteResponse,
  DeleteUpvoteRequest,
  DeleteUpvoteResponse,
  IsUpvotedRequest,
  IsUpvotedResponse,
} from "./service"

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>
}

export interface PanoAPIClient {
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse>
  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse>
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse>
  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse>
  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse>
  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse>
  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse>
  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse>
  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse>
  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse>
  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse>
  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse>
  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse>
  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse>
}

export class PanoAPIClientJSON implements PanoAPIClient {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.GetBatchPosts.bind(this)
    this.GetPosts.bind(this)
    this.CreatePost.bind(this)
    this.UpdatePost.bind(this)
    this.DeletePost.bind(this)
    this.GetBatchComments.bind(this)
    this.GetComments.bind(this)
    this.CreateComment.bind(this)
    this.UpdateComment.bind(this)
    this.DeleteComment.bind(this)
    this.GetUpvotes.bind(this)
    this.CreateUpvote.bind(this)
    this.DeleteUpvote.bind(this)
    this.IsUpvoted.bind(this)
  }
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse> {
    const data = GetBatchPostsRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchPosts",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      GetBatchPostsResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse> {
    const data = GetPostsRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetPosts",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      GetPostsResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse> {
    const data = CreatePostRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreatePost",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      CreatePostResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse> {
    const data = UpdatePostRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdatePost",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      UpdatePostResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse> {
    const data = DeletePostRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeletePost",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      DeletePostResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse> {
    const data = GetBatchCommentsRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchComments",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      GetBatchCommentsResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse> {
    const data = GetCommentsRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetComments",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      GetCommentsResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const data = CreateCommentRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateComment",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      CreateCommentResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse> {
    const data = UpdateCommentRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdateComment",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      UpdateCommentResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const data = DeleteCommentRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteComment",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      DeleteCommentResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse> {
    const data = GetUpvotesRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetUpvotes",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      GetUpvotesResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse> {
    const data = CreateUpvoteRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateUpvote",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      CreateUpvoteResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse> {
    const data = DeleteUpvoteRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteUpvote",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      DeleteUpvoteResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }

  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse> {
    const data = IsUpvotedRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    })
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "IsUpvoted",
      "application/json",
      data as object
    )
    return promise.then((data) =>
      IsUpvotedResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    )
  }
}

export class PanoAPIClientProtobuf implements PanoAPIClient {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.GetBatchPosts.bind(this)
    this.GetPosts.bind(this)
    this.CreatePost.bind(this)
    this.UpdatePost.bind(this)
    this.DeletePost.bind(this)
    this.GetBatchComments.bind(this)
    this.GetComments.bind(this)
    this.CreateComment.bind(this)
    this.UpdateComment.bind(this)
    this.DeleteComment.bind(this)
    this.GetUpvotes.bind(this)
    this.CreateUpvote.bind(this)
    this.DeleteUpvote.bind(this)
    this.IsUpvoted.bind(this)
  }
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse> {
    const data = GetBatchPostsRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchPosts",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      GetBatchPostsResponse.fromBinary(data as Uint8Array)
    )
  }

  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse> {
    const data = GetPostsRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetPosts",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      GetPostsResponse.fromBinary(data as Uint8Array)
    )
  }

  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse> {
    const data = CreatePostRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreatePost",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      CreatePostResponse.fromBinary(data as Uint8Array)
    )
  }

  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse> {
    const data = UpdatePostRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdatePost",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      UpdatePostResponse.fromBinary(data as Uint8Array)
    )
  }

  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse> {
    const data = DeletePostRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeletePost",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      DeletePostResponse.fromBinary(data as Uint8Array)
    )
  }

  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse> {
    const data = GetBatchCommentsRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchComments",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      GetBatchCommentsResponse.fromBinary(data as Uint8Array)
    )
  }

  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse> {
    const data = GetCommentsRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetComments",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      GetCommentsResponse.fromBinary(data as Uint8Array)
    )
  }

  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const data = CreateCommentRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateComment",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      CreateCommentResponse.fromBinary(data as Uint8Array)
    )
  }

  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse> {
    const data = UpdateCommentRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdateComment",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      UpdateCommentResponse.fromBinary(data as Uint8Array)
    )
  }

  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const data = DeleteCommentRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteComment",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      DeleteCommentResponse.fromBinary(data as Uint8Array)
    )
  }

  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse> {
    const data = GetUpvotesRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetUpvotes",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      GetUpvotesResponse.fromBinary(data as Uint8Array)
    )
  }

  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse> {
    const data = CreateUpvoteRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateUpvote",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      CreateUpvoteResponse.fromBinary(data as Uint8Array)
    )
  }

  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse> {
    const data = DeleteUpvoteRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteUpvote",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      DeleteUpvoteResponse.fromBinary(data as Uint8Array)
    )
  }

  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse> {
    const data = IsUpvotedRequest.toBinary(request)
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "IsUpvoted",
      "application/protobuf",
      data
    )
    return promise.then((data) =>
      IsUpvotedResponse.fromBinary(data as Uint8Array)
    )
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface PanoAPITwirp<T extends TwirpContext = TwirpContext> {
  GetBatchPosts(
    ctx: T,
    request: GetBatchPostsRequest
  ): Promise<GetBatchPostsResponse>
  GetPosts(ctx: T, request: GetPostsRequest): Promise<GetPostsResponse>
  CreatePost(ctx: T, request: CreatePostRequest): Promise<CreatePostResponse>
  UpdatePost(ctx: T, request: UpdatePostRequest): Promise<UpdatePostResponse>
  DeletePost(ctx: T, request: DeletePostRequest): Promise<DeletePostResponse>
  GetBatchComments(
    ctx: T,
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse>
  GetComments(ctx: T, request: GetCommentsRequest): Promise<GetCommentsResponse>
  CreateComment(
    ctx: T,
    request: CreateCommentRequest
  ): Promise<CreateCommentResponse>
  UpdateComment(
    ctx: T,
    request: UpdateCommentRequest
  ): Promise<UpdateCommentResponse>
  DeleteComment(
    ctx: T,
    request: DeleteCommentRequest
  ): Promise<DeleteCommentResponse>
  GetUpvotes(ctx: T, request: GetUpvotesRequest): Promise<GetUpvotesResponse>
  CreateUpvote(
    ctx: T,
    request: CreateUpvoteRequest
  ): Promise<CreateUpvoteResponse>
  DeleteUpvote(
    ctx: T,
    request: DeleteUpvoteRequest
  ): Promise<DeleteUpvoteResponse>
  IsUpvoted(ctx: T, request: IsUpvotedRequest): Promise<IsUpvotedResponse>
}

export enum PanoAPIMethod {
  GetBatchPosts = "GetBatchPosts",
  GetPosts = "GetPosts",
  CreatePost = "CreatePost",
  UpdatePost = "UpdatePost",
  DeletePost = "DeletePost",
  GetBatchComments = "GetBatchComments",
  GetComments = "GetComments",
  CreateComment = "CreateComment",
  UpdateComment = "UpdateComment",
  DeleteComment = "DeleteComment",
  GetUpvotes = "GetUpvotes",
  CreateUpvote = "CreateUpvote",
  DeleteUpvote = "DeleteUpvote",
  IsUpvoted = "IsUpvoted",
}

export const PanoAPIMethodList = [
  PanoAPIMethod.GetBatchPosts,
  PanoAPIMethod.GetPosts,
  PanoAPIMethod.CreatePost,
  PanoAPIMethod.UpdatePost,
  PanoAPIMethod.DeletePost,
  PanoAPIMethod.GetBatchComments,
  PanoAPIMethod.GetComments,
  PanoAPIMethod.CreateComment,
  PanoAPIMethod.UpdateComment,
  PanoAPIMethod.DeleteComment,
  PanoAPIMethod.GetUpvotes,
  PanoAPIMethod.CreateUpvote,
  PanoAPIMethod.DeleteUpvote,
  PanoAPIMethod.IsUpvoted,
]

export function createPanoAPIServer<T extends TwirpContext = TwirpContext>(
  service: PanoAPITwirp<T>
) {
  return new TwirpServer<PanoAPITwirp, T>({
    service,
    packageName: "kampus.panoapi",
    serviceName: "PanoAPI",
    methodList: PanoAPIMethodList,
    matchRoute: matchPanoAPIRoute,
  })
}

function matchPanoAPIRoute<T extends TwirpContext = TwirpContext>(
  method: string,
  events: RouterEvents<T>
) {
  switch (method) {
    case "GetBatchPosts":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          GetBatchPostsRequest,
          GetBatchPostsResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "GetBatchPosts" }
        await events.onMatch(ctx)
        return handlePanoAPIGetBatchPostsRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "GetPosts":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetPosts" }
        await events.onMatch(ctx)
        return handlePanoAPIGetPostsRequest(ctx, service, data, interceptors)
      }
    case "CreatePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "CreatePost" }
        await events.onMatch(ctx)
        return handlePanoAPICreatePostRequest(ctx, service, data, interceptors)
      }
    case "UpdatePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "UpdatePost" }
        await events.onMatch(ctx)
        return handlePanoAPIUpdatePostRequest(ctx, service, data, interceptors)
      }
    case "DeletePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "DeletePost" }
        await events.onMatch(ctx)
        return handlePanoAPIDeletePostRequest(ctx, service, data, interceptors)
      }
    case "GetBatchComments":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          GetBatchCommentsRequest,
          GetBatchCommentsResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "GetBatchComments" }
        await events.onMatch(ctx)
        return handlePanoAPIGetBatchCommentsRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "GetComments":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetComments" }
        await events.onMatch(ctx)
        return handlePanoAPIGetCommentsRequest(ctx, service, data, interceptors)
      }
    case "CreateComment":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          CreateCommentRequest,
          CreateCommentResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "CreateComment" }
        await events.onMatch(ctx)
        return handlePanoAPICreateCommentRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "UpdateComment":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          UpdateCommentRequest,
          UpdateCommentResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "UpdateComment" }
        await events.onMatch(ctx)
        return handlePanoAPIUpdateCommentRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "DeleteComment":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          DeleteCommentRequest,
          DeleteCommentResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "DeleteComment" }
        await events.onMatch(ctx)
        return handlePanoAPIDeleteCommentRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "GetUpvotes":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetUpvotes" }
        await events.onMatch(ctx)
        return handlePanoAPIGetUpvotesRequest(ctx, service, data, interceptors)
      }
    case "CreateUpvote":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          CreateUpvoteRequest,
          CreateUpvoteResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "CreateUpvote" }
        await events.onMatch(ctx)
        return handlePanoAPICreateUpvoteRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "DeleteUpvote":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          DeleteUpvoteRequest,
          DeleteUpvoteResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "DeleteUpvote" }
        await events.onMatch(ctx)
        return handlePanoAPIDeleteUpvoteRequest(
          ctx,
          service,
          data,
          interceptors
        )
      }
    case "IsUpvoted":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "IsUpvoted" }
        await events.onMatch(ctx)
        return handlePanoAPIIsUpvotedRequest(ctx, service, data, interceptors)
      }
    default:
      events.onNotFound()
      const msg = `no handler found`
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIGetBatchPostsRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchPostsRequest, GetBatchPostsResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIGetBatchPostsJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetBatchPostsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIGetPostsRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIGetPostsJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetPostsProtobuf<T>(ctx, service, data, interceptors)
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPICreatePostRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPICreatePostJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPICreatePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIUpdatePostRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIUpdatePostJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIUpdatePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIDeletePostRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIDeletePostJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeletePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIGetBatchCommentsRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetBatchCommentsRequest,
    GetBatchCommentsResponse
  >[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIGetBatchCommentsJSON<T>(
        ctx,
        service,
        data,
        interceptors
      )
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetBatchCommentsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIGetCommentsRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIGetCommentsJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetCommentsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPICreateCommentRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateCommentRequest, CreateCommentResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPICreateCommentJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPICreateCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIUpdateCommentRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdateCommentRequest, UpdateCommentResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIUpdateCommentJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIUpdateCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIDeleteCommentRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteCommentRequest, DeleteCommentResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIDeleteCommentJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeleteCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIGetUpvotesRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIGetUpvotesJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetUpvotesProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPICreateUpvoteRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUpvoteRequest, CreateUpvoteResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPICreateUpvoteJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPICreateUpvoteProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIDeleteUpvoteRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteUpvoteRequest, DeleteUpvoteResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIDeleteUpvoteJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeleteUpvoteProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      )
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}

function handlePanoAPIIsUpvotedRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handlePanoAPIIsUpvotedJSON<T>(ctx, service, data, interceptors)
    case TwirpContentType.Protobuf:
      return handlePanoAPIIsUpvotedProtobuf<T>(ctx, service, data, interceptors)
    default:
      const msg = "unexpected Content-Type"
      throw new TwirpError(TwirpErrorCode.BadRoute, msg)
  }
}
async function handlePanoAPIGetBatchPostsJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchPostsRequest, GetBatchPostsResponse>[]
) {
  let request: GetBatchPostsRequest
  let response: GetBatchPostsResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = GetBatchPostsRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchPostsRequest,
      GetBatchPostsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchPosts(ctx, inputReq)
    })
  } else {
    response = await service.GetBatchPosts(ctx, request!)
  }

  return JSON.stringify(
    GetBatchPostsResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIGetPostsJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
) {
  let request: GetPostsRequest
  let response: GetPostsResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = GetPostsRequest.fromJson(body, { ignoreUnknownFields: true })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetPostsRequest,
      GetPostsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetPosts(ctx, inputReq)
    })
  } else {
    response = await service.GetPosts(ctx, request!)
  }

  return JSON.stringify(
    GetPostsResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPICreatePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
) {
  let request: CreatePostRequest
  let response: CreatePostResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = CreatePostRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreatePostRequest,
      CreatePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreatePost(ctx, inputReq)
    })
  } else {
    response = await service.CreatePost(ctx, request!)
  }

  return JSON.stringify(
    CreatePostResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIUpdatePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
) {
  let request: UpdatePostRequest
  let response: UpdatePostResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = UpdatePostRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdatePostRequest,
      UpdatePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdatePost(ctx, inputReq)
    })
  } else {
    response = await service.UpdatePost(ctx, request!)
  }

  return JSON.stringify(
    UpdatePostResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIDeletePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
) {
  let request: DeletePostRequest
  let response: DeletePostResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = DeletePostRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeletePostRequest,
      DeletePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeletePost(ctx, inputReq)
    })
  } else {
    response = await service.DeletePost(ctx, request!)
  }

  return JSON.stringify(
    DeletePostResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIGetBatchCommentsJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetBatchCommentsRequest,
    GetBatchCommentsResponse
  >[]
) {
  let request: GetBatchCommentsRequest
  let response: GetBatchCommentsResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = GetBatchCommentsRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchCommentsRequest,
      GetBatchCommentsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchComments(ctx, inputReq)
    })
  } else {
    response = await service.GetBatchComments(ctx, request!)
  }

  return JSON.stringify(
    GetBatchCommentsResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIGetCommentsJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
) {
  let request: GetCommentsRequest
  let response: GetCommentsResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = GetCommentsRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCommentsRequest,
      GetCommentsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetComments(ctx, inputReq)
    })
  } else {
    response = await service.GetComments(ctx, request!)
  }

  return JSON.stringify(
    GetCommentsResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPICreateCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateCommentRequest, CreateCommentResponse>[]
) {
  let request: CreateCommentRequest
  let response: CreateCommentResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = CreateCommentRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateCommentRequest,
      CreateCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateComment(ctx, inputReq)
    })
  } else {
    response = await service.CreateComment(ctx, request!)
  }

  return JSON.stringify(
    CreateCommentResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIUpdateCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdateCommentRequest, UpdateCommentResponse>[]
) {
  let request: UpdateCommentRequest
  let response: UpdateCommentResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = UpdateCommentRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdateCommentRequest,
      UpdateCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdateComment(ctx, inputReq)
    })
  } else {
    response = await service.UpdateComment(ctx, request!)
  }

  return JSON.stringify(
    UpdateCommentResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIDeleteCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteCommentRequest, DeleteCommentResponse>[]
) {
  let request: DeleteCommentRequest
  let response: DeleteCommentResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = DeleteCommentRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteCommentRequest,
      DeleteCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteComment(ctx, inputReq)
    })
  } else {
    response = await service.DeleteComment(ctx, request!)
  }

  return JSON.stringify(
    DeleteCommentResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIGetUpvotesJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
) {
  let request: GetUpvotesRequest
  let response: GetUpvotesResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = GetUpvotesRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUpvotesRequest,
      GetUpvotesResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUpvotes(ctx, inputReq)
    })
  } else {
    response = await service.GetUpvotes(ctx, request!)
  }

  return JSON.stringify(
    GetUpvotesResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPICreateUpvoteJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUpvoteRequest, CreateUpvoteResponse>[]
) {
  let request: CreateUpvoteRequest
  let response: CreateUpvoteResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = CreateUpvoteRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUpvoteRequest,
      CreateUpvoteResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUpvote(ctx, inputReq)
    })
  } else {
    response = await service.CreateUpvote(ctx, request!)
  }

  return JSON.stringify(
    CreateUpvoteResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIDeleteUpvoteJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteUpvoteRequest, DeleteUpvoteResponse>[]
) {
  let request: DeleteUpvoteRequest
  let response: DeleteUpvoteResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = DeleteUpvoteRequest.fromJson(body, {
      ignoreUnknownFields: true,
    })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteUpvoteRequest,
      DeleteUpvoteResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteUpvote(ctx, inputReq)
    })
  } else {
    response = await service.DeleteUpvote(ctx, request!)
  }

  return JSON.stringify(
    DeleteUpvoteResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}

async function handlePanoAPIIsUpvotedJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
) {
  let request: IsUpvotedRequest
  let response: IsUpvotedResponse

  try {
    const body = JSON.parse(data.toString() || "{}")
    request = IsUpvotedRequest.fromJson(body, { ignoreUnknownFields: true })
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      IsUpvotedRequest,
      IsUpvotedResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.IsUpvoted(ctx, inputReq)
    })
  } else {
    response = await service.IsUpvoted(ctx, request!)
  }

  return JSON.stringify(
    IsUpvotedResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  )
}
async function handlePanoAPIGetBatchPostsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchPostsRequest, GetBatchPostsResponse>[]
) {
  let request: GetBatchPostsRequest
  let response: GetBatchPostsResponse

  try {
    request = GetBatchPostsRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchPostsRequest,
      GetBatchPostsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchPosts(ctx, inputReq)
    })
  } else {
    response = await service.GetBatchPosts(ctx, request!)
  }

  return Buffer.from(GetBatchPostsResponse.toBinary(response))
}

async function handlePanoAPIGetPostsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
) {
  let request: GetPostsRequest
  let response: GetPostsResponse

  try {
    request = GetPostsRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetPostsRequest,
      GetPostsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetPosts(ctx, inputReq)
    })
  } else {
    response = await service.GetPosts(ctx, request!)
  }

  return Buffer.from(GetPostsResponse.toBinary(response))
}

async function handlePanoAPICreatePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
) {
  let request: CreatePostRequest
  let response: CreatePostResponse

  try {
    request = CreatePostRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreatePostRequest,
      CreatePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreatePost(ctx, inputReq)
    })
  } else {
    response = await service.CreatePost(ctx, request!)
  }

  return Buffer.from(CreatePostResponse.toBinary(response))
}

async function handlePanoAPIUpdatePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
) {
  let request: UpdatePostRequest
  let response: UpdatePostResponse

  try {
    request = UpdatePostRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdatePostRequest,
      UpdatePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdatePost(ctx, inputReq)
    })
  } else {
    response = await service.UpdatePost(ctx, request!)
  }

  return Buffer.from(UpdatePostResponse.toBinary(response))
}

async function handlePanoAPIDeletePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
) {
  let request: DeletePostRequest
  let response: DeletePostResponse

  try {
    request = DeletePostRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeletePostRequest,
      DeletePostResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeletePost(ctx, inputReq)
    })
  } else {
    response = await service.DeletePost(ctx, request!)
  }

  return Buffer.from(DeletePostResponse.toBinary(response))
}

async function handlePanoAPIGetBatchCommentsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetBatchCommentsRequest,
    GetBatchCommentsResponse
  >[]
) {
  let request: GetBatchCommentsRequest
  let response: GetBatchCommentsResponse

  try {
    request = GetBatchCommentsRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchCommentsRequest,
      GetBatchCommentsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchComments(ctx, inputReq)
    })
  } else {
    response = await service.GetBatchComments(ctx, request!)
  }

  return Buffer.from(GetBatchCommentsResponse.toBinary(response))
}

async function handlePanoAPIGetCommentsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
) {
  let request: GetCommentsRequest
  let response: GetCommentsResponse

  try {
    request = GetCommentsRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCommentsRequest,
      GetCommentsResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetComments(ctx, inputReq)
    })
  } else {
    response = await service.GetComments(ctx, request!)
  }

  return Buffer.from(GetCommentsResponse.toBinary(response))
}

async function handlePanoAPICreateCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateCommentRequest, CreateCommentResponse>[]
) {
  let request: CreateCommentRequest
  let response: CreateCommentResponse

  try {
    request = CreateCommentRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateCommentRequest,
      CreateCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateComment(ctx, inputReq)
    })
  } else {
    response = await service.CreateComment(ctx, request!)
  }

  return Buffer.from(CreateCommentResponse.toBinary(response))
}

async function handlePanoAPIUpdateCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdateCommentRequest, UpdateCommentResponse>[]
) {
  let request: UpdateCommentRequest
  let response: UpdateCommentResponse

  try {
    request = UpdateCommentRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdateCommentRequest,
      UpdateCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdateComment(ctx, inputReq)
    })
  } else {
    response = await service.UpdateComment(ctx, request!)
  }

  return Buffer.from(UpdateCommentResponse.toBinary(response))
}

async function handlePanoAPIDeleteCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteCommentRequest, DeleteCommentResponse>[]
) {
  let request: DeleteCommentRequest
  let response: DeleteCommentResponse

  try {
    request = DeleteCommentRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteCommentRequest,
      DeleteCommentResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteComment(ctx, inputReq)
    })
  } else {
    response = await service.DeleteComment(ctx, request!)
  }

  return Buffer.from(DeleteCommentResponse.toBinary(response))
}

async function handlePanoAPIGetUpvotesProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
) {
  let request: GetUpvotesRequest
  let response: GetUpvotesResponse

  try {
    request = GetUpvotesRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUpvotesRequest,
      GetUpvotesResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUpvotes(ctx, inputReq)
    })
  } else {
    response = await service.GetUpvotes(ctx, request!)
  }

  return Buffer.from(GetUpvotesResponse.toBinary(response))
}

async function handlePanoAPICreateUpvoteProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUpvoteRequest, CreateUpvoteResponse>[]
) {
  let request: CreateUpvoteRequest
  let response: CreateUpvoteResponse

  try {
    request = CreateUpvoteRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUpvoteRequest,
      CreateUpvoteResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUpvote(ctx, inputReq)
    })
  } else {
    response = await service.CreateUpvote(ctx, request!)
  }

  return Buffer.from(CreateUpvoteResponse.toBinary(response))
}

async function handlePanoAPIDeleteUpvoteProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteUpvoteRequest, DeleteUpvoteResponse>[]
) {
  let request: DeleteUpvoteRequest
  let response: DeleteUpvoteResponse

  try {
    request = DeleteUpvoteRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteUpvoteRequest,
      DeleteUpvoteResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteUpvote(ctx, inputReq)
    })
  } else {
    response = await service.DeleteUpvote(ctx, request!)
  }

  return Buffer.from(DeleteUpvoteResponse.toBinary(response))
}

async function handlePanoAPIIsUpvotedProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
) {
  let request: IsUpvotedRequest
  let response: IsUpvotedResponse

  try {
    request = IsUpvotedRequest.fromBinary(data)
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded"
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true)
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      IsUpvotedRequest,
      IsUpvotedResponse
    >
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.IsUpvoted(ctx, inputReq)
    })
  } else {
    response = await service.IsUpvoted(ctx, request!)
  }

  return Buffer.from(IsUpvotedResponse.toBinary(response))
}
