import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts";
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
} from "./service";

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>;
}

export interface PanoAPIClient {
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse>;
  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse>;
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse>;
  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse>;
  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse>;
  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse>;
  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse>;
  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse>;
  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse>;
  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse>;
  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse>;
  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse>;
  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse>;
  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse>;
}

export class PanoAPIClientJSON implements PanoAPIClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetBatchPosts.bind(this);
    this.GetPosts.bind(this);
    this.CreatePost.bind(this);
    this.UpdatePost.bind(this);
    this.DeletePost.bind(this);
    this.GetBatchComments.bind(this);
    this.GetComments.bind(this);
    this.CreateComment.bind(this);
    this.UpdateComment.bind(this);
    this.DeleteComment.bind(this);
    this.GetUpvotes.bind(this);
    this.CreateUpvote.bind(this);
    this.DeleteUpvote.bind(this);
    this.IsUpvoted.bind(this);
  }
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse> {
    const data = GetBatchPostsRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchPosts",
      "application/json",
      data as object
    );
    return promise.then((data) => GetBatchPostsResponse.fromJSON(data as any));
  }

  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse> {
    const data = GetPostsRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetPosts",
      "application/json",
      data as object
    );
    return promise.then((data) => GetPostsResponse.fromJSON(data as any));
  }

  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse> {
    const data = CreatePostRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreatePost",
      "application/json",
      data as object
    );
    return promise.then((data) => CreatePostResponse.fromJSON(data as any));
  }

  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse> {
    const data = UpdatePostRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdatePost",
      "application/json",
      data as object
    );
    return promise.then((data) => UpdatePostResponse.fromJSON(data as any));
  }

  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse> {
    const data = DeletePostRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeletePost",
      "application/json",
      data as object
    );
    return promise.then((data) => DeletePostResponse.fromJSON(data as any));
  }

  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse> {
    const data = GetBatchCommentsRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchComments",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetBatchCommentsResponse.fromJSON(data as any)
    );
  }

  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse> {
    const data = GetCommentsRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetComments",
      "application/json",
      data as object
    );
    return promise.then((data) => GetCommentsResponse.fromJSON(data as any));
  }

  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const data = CreateCommentRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateComment",
      "application/json",
      data as object
    );
    return promise.then((data) => CreateCommentResponse.fromJSON(data as any));
  }

  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse> {
    const data = UpdateCommentRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdateComment",
      "application/json",
      data as object
    );
    return promise.then((data) => UpdateCommentResponse.fromJSON(data as any));
  }

  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const data = DeleteCommentRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteComment",
      "application/json",
      data as object
    );
    return promise.then((data) => DeleteCommentResponse.fromJSON(data as any));
  }

  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse> {
    const data = GetUpvotesRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetUpvotes",
      "application/json",
      data as object
    );
    return promise.then((data) => GetUpvotesResponse.fromJSON(data as any));
  }

  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse> {
    const data = CreateUpvoteRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateUpvote",
      "application/json",
      data as object
    );
    return promise.then((data) => CreateUpvoteResponse.fromJSON(data as any));
  }

  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse> {
    const data = DeleteUpvoteRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteUpvote",
      "application/json",
      data as object
    );
    return promise.then((data) => DeleteUpvoteResponse.fromJSON(data as any));
  }

  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse> {
    const data = IsUpvotedRequest.toJSON(request);
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "IsUpvoted",
      "application/json",
      data as object
    );
    return promise.then((data) => IsUpvotedResponse.fromJSON(data as any));
  }
}

export class PanoAPIClientProtobuf implements PanoAPIClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetBatchPosts.bind(this);
    this.GetPosts.bind(this);
    this.CreatePost.bind(this);
    this.UpdatePost.bind(this);
    this.DeletePost.bind(this);
    this.GetBatchComments.bind(this);
    this.GetComments.bind(this);
    this.CreateComment.bind(this);
    this.UpdateComment.bind(this);
    this.DeleteComment.bind(this);
    this.GetUpvotes.bind(this);
    this.CreateUpvote.bind(this);
    this.DeleteUpvote.bind(this);
    this.IsUpvoted.bind(this);
  }
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse> {
    const data = GetBatchPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchPosts",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetBatchPostsResponse.decode(data as Uint8Array)
    );
  }

  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse> {
    const data = GetPostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetPosts",
      "application/protobuf",
      data
    );
    return promise.then((data) => GetPostsResponse.decode(data as Uint8Array));
  }

  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse> {
    const data = CreatePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreatePost",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      CreatePostResponse.decode(data as Uint8Array)
    );
  }

  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse> {
    const data = UpdatePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdatePost",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      UpdatePostResponse.decode(data as Uint8Array)
    );
  }

  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse> {
    const data = DeletePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeletePost",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      DeletePostResponse.decode(data as Uint8Array)
    );
  }

  GetBatchComments(
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse> {
    const data = GetBatchCommentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetBatchComments",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetBatchCommentsResponse.decode(data as Uint8Array)
    );
  }

  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse> {
    const data = GetCommentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetComments",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetCommentsResponse.decode(data as Uint8Array)
    );
  }

  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const data = CreateCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateComment",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      CreateCommentResponse.decode(data as Uint8Array)
    );
  }

  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse> {
    const data = UpdateCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "UpdateComment",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      UpdateCommentResponse.decode(data as Uint8Array)
    );
  }

  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const data = DeleteCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteComment",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      DeleteCommentResponse.decode(data as Uint8Array)
    );
  }

  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse> {
    const data = GetUpvotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "GetUpvotes",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetUpvotesResponse.decode(data as Uint8Array)
    );
  }

  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse> {
    const data = CreateUpvoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "CreateUpvote",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      CreateUpvoteResponse.decode(data as Uint8Array)
    );
  }

  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse> {
    const data = DeleteUpvoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "DeleteUpvote",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      DeleteUpvoteResponse.decode(data as Uint8Array)
    );
  }

  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse> {
    const data = IsUpvotedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kampus.panoapi.PanoAPI",
      "IsUpvoted",
      "application/protobuf",
      data
    );
    return promise.then((data) => IsUpvotedResponse.decode(data as Uint8Array));
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface PanoAPITwirp<T extends TwirpContext = TwirpContext> {
  GetBatchPosts(
    ctx: T,
    request: GetBatchPostsRequest
  ): Promise<GetBatchPostsResponse>;
  GetPosts(ctx: T, request: GetPostsRequest): Promise<GetPostsResponse>;
  CreatePost(ctx: T, request: CreatePostRequest): Promise<CreatePostResponse>;
  UpdatePost(ctx: T, request: UpdatePostRequest): Promise<UpdatePostResponse>;
  DeletePost(ctx: T, request: DeletePostRequest): Promise<DeletePostResponse>;
  GetBatchComments(
    ctx: T,
    request: GetBatchCommentsRequest
  ): Promise<GetBatchCommentsResponse>;
  GetComments(
    ctx: T,
    request: GetCommentsRequest
  ): Promise<GetCommentsResponse>;
  CreateComment(
    ctx: T,
    request: CreateCommentRequest
  ): Promise<CreateCommentResponse>;
  UpdateComment(
    ctx: T,
    request: UpdateCommentRequest
  ): Promise<UpdateCommentResponse>;
  DeleteComment(
    ctx: T,
    request: DeleteCommentRequest
  ): Promise<DeleteCommentResponse>;
  GetUpvotes(ctx: T, request: GetUpvotesRequest): Promise<GetUpvotesResponse>;
  CreateUpvote(
    ctx: T,
    request: CreateUpvoteRequest
  ): Promise<CreateUpvoteResponse>;
  DeleteUpvote(
    ctx: T,
    request: DeleteUpvoteRequest
  ): Promise<DeleteUpvoteResponse>;
  IsUpvoted(ctx: T, request: IsUpvotedRequest): Promise<IsUpvotedResponse>;
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
];

export function createPanoAPIServer<T extends TwirpContext = TwirpContext>(
  service: PanoAPITwirp<T>
) {
  return new TwirpServer<PanoAPITwirp, T>({
    service,
    packageName: "kampus.panoapi",
    serviceName: "PanoAPI",
    methodList: PanoAPIMethodList,
    matchRoute: matchPanoAPIRoute,
  });
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
        ctx = { ...ctx, methodName: "GetBatchPosts" };
        await events.onMatch(ctx);
        return handlePanoAPIGetBatchPostsRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetPosts":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetPosts" };
        await events.onMatch(ctx);
        return handlePanoAPIGetPostsRequest(ctx, service, data, interceptors);
      };
    case "CreatePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "CreatePost" };
        await events.onMatch(ctx);
        return handlePanoAPICreatePostRequest(ctx, service, data, interceptors);
      };
    case "UpdatePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "UpdatePost" };
        await events.onMatch(ctx);
        return handlePanoAPIUpdatePostRequest(ctx, service, data, interceptors);
      };
    case "DeletePost":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "DeletePost" };
        await events.onMatch(ctx);
        return handlePanoAPIDeletePostRequest(ctx, service, data, interceptors);
      };
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
        ctx = { ...ctx, methodName: "GetBatchComments" };
        await events.onMatch(ctx);
        return handlePanoAPIGetBatchCommentsRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetComments":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetComments" };
        await events.onMatch(ctx);
        return handlePanoAPIGetCommentsRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
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
        ctx = { ...ctx, methodName: "CreateComment" };
        await events.onMatch(ctx);
        return handlePanoAPICreateCommentRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
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
        ctx = { ...ctx, methodName: "UpdateComment" };
        await events.onMatch(ctx);
        return handlePanoAPIUpdateCommentRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
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
        ctx = { ...ctx, methodName: "DeleteComment" };
        await events.onMatch(ctx);
        return handlePanoAPIDeleteCommentRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetUpvotes":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetUpvotes" };
        await events.onMatch(ctx);
        return handlePanoAPIGetUpvotesRequest(ctx, service, data, interceptors);
      };
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
        ctx = { ...ctx, methodName: "CreateUpvote" };
        await events.onMatch(ctx);
        return handlePanoAPICreateUpvoteRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
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
        ctx = { ...ctx, methodName: "DeleteUpvote" };
        await events.onMatch(ctx);
        return handlePanoAPIDeleteUpvoteRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "IsUpvoted":
      return async (
        ctx: T,
        service: PanoAPITwirp,
        data: Buffer,
        interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "IsUpvoted" };
        await events.onMatch(ctx);
        return handlePanoAPIIsUpvotedRequest(ctx, service, data, interceptors);
      };
    default:
      events.onNotFound();
      const msg = `no handler found`;
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIGetBatchPostsJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetBatchPostsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIGetPostsJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetPostsProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPICreatePostJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPICreatePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIUpdatePostJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIUpdatePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIDeletePostJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeletePostProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      );
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetBatchCommentsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIGetCommentsJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetCommentsProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPICreateCommentJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handlePanoAPICreateCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIUpdateCommentJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handlePanoAPIUpdateCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIDeleteCommentJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeleteCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIGetUpvotesJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIGetUpvotesProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPICreateUpvoteJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPICreateUpvoteProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIDeleteUpvoteJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIDeleteUpvoteProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
      return handlePanoAPIIsUpvotedJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handlePanoAPIIsUpvotedProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
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
  let request: GetBatchPostsRequest;
  let response: GetBatchPostsResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetBatchPostsRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchPostsRequest,
      GetBatchPostsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchPosts(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchPosts(ctx, request!);
  }

  return JSON.stringify(GetBatchPostsResponse.toJSON(response) as string);
}

async function handlePanoAPIGetPostsJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
) {
  let request: GetPostsRequest;
  let response: GetPostsResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetPostsRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetPostsRequest,
      GetPostsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetPosts(ctx, inputReq);
    });
  } else {
    response = await service.GetPosts(ctx, request!);
  }

  return JSON.stringify(GetPostsResponse.toJSON(response) as string);
}

async function handlePanoAPICreatePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
) {
  let request: CreatePostRequest;
  let response: CreatePostResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreatePostRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreatePostRequest,
      CreatePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreatePost(ctx, inputReq);
    });
  } else {
    response = await service.CreatePost(ctx, request!);
  }

  return JSON.stringify(CreatePostResponse.toJSON(response) as string);
}

async function handlePanoAPIUpdatePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
) {
  let request: UpdatePostRequest;
  let response: UpdatePostResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = UpdatePostRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdatePostRequest,
      UpdatePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdatePost(ctx, inputReq);
    });
  } else {
    response = await service.UpdatePost(ctx, request!);
  }

  return JSON.stringify(UpdatePostResponse.toJSON(response) as string);
}

async function handlePanoAPIDeletePostJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
) {
  let request: DeletePostRequest;
  let response: DeletePostResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = DeletePostRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeletePostRequest,
      DeletePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeletePost(ctx, inputReq);
    });
  } else {
    response = await service.DeletePost(ctx, request!);
  }

  return JSON.stringify(DeletePostResponse.toJSON(response) as string);
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
  let request: GetBatchCommentsRequest;
  let response: GetBatchCommentsResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetBatchCommentsRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchCommentsRequest,
      GetBatchCommentsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchComments(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchComments(ctx, request!);
  }

  return JSON.stringify(GetBatchCommentsResponse.toJSON(response) as string);
}

async function handlePanoAPIGetCommentsJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
) {
  let request: GetCommentsRequest;
  let response: GetCommentsResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetCommentsRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCommentsRequest,
      GetCommentsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetComments(ctx, inputReq);
    });
  } else {
    response = await service.GetComments(ctx, request!);
  }

  return JSON.stringify(GetCommentsResponse.toJSON(response) as string);
}

async function handlePanoAPICreateCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateCommentRequest, CreateCommentResponse>[]
) {
  let request: CreateCommentRequest;
  let response: CreateCommentResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreateCommentRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateCommentRequest,
      CreateCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateComment(ctx, inputReq);
    });
  } else {
    response = await service.CreateComment(ctx, request!);
  }

  return JSON.stringify(CreateCommentResponse.toJSON(response) as string);
}

async function handlePanoAPIUpdateCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdateCommentRequest, UpdateCommentResponse>[]
) {
  let request: UpdateCommentRequest;
  let response: UpdateCommentResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = UpdateCommentRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdateCommentRequest,
      UpdateCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdateComment(ctx, inputReq);
    });
  } else {
    response = await service.UpdateComment(ctx, request!);
  }

  return JSON.stringify(UpdateCommentResponse.toJSON(response) as string);
}

async function handlePanoAPIDeleteCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteCommentRequest, DeleteCommentResponse>[]
) {
  let request: DeleteCommentRequest;
  let response: DeleteCommentResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = DeleteCommentRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteCommentRequest,
      DeleteCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteComment(ctx, inputReq);
    });
  } else {
    response = await service.DeleteComment(ctx, request!);
  }

  return JSON.stringify(DeleteCommentResponse.toJSON(response) as string);
}

async function handlePanoAPIGetUpvotesJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
) {
  let request: GetUpvotesRequest;
  let response: GetUpvotesResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetUpvotesRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUpvotesRequest,
      GetUpvotesResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUpvotes(ctx, inputReq);
    });
  } else {
    response = await service.GetUpvotes(ctx, request!);
  }

  return JSON.stringify(GetUpvotesResponse.toJSON(response) as string);
}

async function handlePanoAPICreateUpvoteJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUpvoteRequest, CreateUpvoteResponse>[]
) {
  let request: CreateUpvoteRequest;
  let response: CreateUpvoteResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreateUpvoteRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUpvoteRequest,
      CreateUpvoteResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUpvote(ctx, inputReq);
    });
  } else {
    response = await service.CreateUpvote(ctx, request!);
  }

  return JSON.stringify(CreateUpvoteResponse.toJSON(response) as string);
}

async function handlePanoAPIDeleteUpvoteJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteUpvoteRequest, DeleteUpvoteResponse>[]
) {
  let request: DeleteUpvoteRequest;
  let response: DeleteUpvoteResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = DeleteUpvoteRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteUpvoteRequest,
      DeleteUpvoteResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteUpvote(ctx, inputReq);
    });
  } else {
    response = await service.DeleteUpvote(ctx, request!);
  }

  return JSON.stringify(DeleteUpvoteResponse.toJSON(response) as string);
}

async function handlePanoAPIIsUpvotedJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
) {
  let request: IsUpvotedRequest;
  let response: IsUpvotedResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = IsUpvotedRequest.fromJSON(body);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      IsUpvotedRequest,
      IsUpvotedResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.IsUpvoted(ctx, inputReq);
    });
  } else {
    response = await service.IsUpvoted(ctx, request!);
  }

  return JSON.stringify(IsUpvotedResponse.toJSON(response) as string);
}
async function handlePanoAPIGetBatchPostsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetBatchPostsRequest, GetBatchPostsResponse>[]
) {
  let request: GetBatchPostsRequest;
  let response: GetBatchPostsResponse;

  try {
    request = GetBatchPostsRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchPostsRequest,
      GetBatchPostsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchPosts(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchPosts(ctx, request!);
  }

  return Buffer.from(GetBatchPostsResponse.encode(response).finish());
}

async function handlePanoAPIGetPostsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetPostsRequest, GetPostsResponse>[]
) {
  let request: GetPostsRequest;
  let response: GetPostsResponse;

  try {
    request = GetPostsRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetPostsRequest,
      GetPostsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetPosts(ctx, inputReq);
    });
  } else {
    response = await service.GetPosts(ctx, request!);
  }

  return Buffer.from(GetPostsResponse.encode(response).finish());
}

async function handlePanoAPICreatePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreatePostRequest, CreatePostResponse>[]
) {
  let request: CreatePostRequest;
  let response: CreatePostResponse;

  try {
    request = CreatePostRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreatePostRequest,
      CreatePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreatePost(ctx, inputReq);
    });
  } else {
    response = await service.CreatePost(ctx, request!);
  }

  return Buffer.from(CreatePostResponse.encode(response).finish());
}

async function handlePanoAPIUpdatePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdatePostRequest, UpdatePostResponse>[]
) {
  let request: UpdatePostRequest;
  let response: UpdatePostResponse;

  try {
    request = UpdatePostRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdatePostRequest,
      UpdatePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdatePost(ctx, inputReq);
    });
  } else {
    response = await service.UpdatePost(ctx, request!);
  }

  return Buffer.from(UpdatePostResponse.encode(response).finish());
}

async function handlePanoAPIDeletePostProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeletePostRequest, DeletePostResponse>[]
) {
  let request: DeletePostRequest;
  let response: DeletePostResponse;

  try {
    request = DeletePostRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeletePostRequest,
      DeletePostResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeletePost(ctx, inputReq);
    });
  } else {
    response = await service.DeletePost(ctx, request!);
  }

  return Buffer.from(DeletePostResponse.encode(response).finish());
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
  let request: GetBatchCommentsRequest;
  let response: GetBatchCommentsResponse;

  try {
    request = GetBatchCommentsRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetBatchCommentsRequest,
      GetBatchCommentsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetBatchComments(ctx, inputReq);
    });
  } else {
    response = await service.GetBatchComments(ctx, request!);
  }

  return Buffer.from(GetBatchCommentsResponse.encode(response).finish());
}

async function handlePanoAPIGetCommentsProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCommentsRequest, GetCommentsResponse>[]
) {
  let request: GetCommentsRequest;
  let response: GetCommentsResponse;

  try {
    request = GetCommentsRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCommentsRequest,
      GetCommentsResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetComments(ctx, inputReq);
    });
  } else {
    response = await service.GetComments(ctx, request!);
  }

  return Buffer.from(GetCommentsResponse.encode(response).finish());
}

async function handlePanoAPICreateCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateCommentRequest, CreateCommentResponse>[]
) {
  let request: CreateCommentRequest;
  let response: CreateCommentResponse;

  try {
    request = CreateCommentRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateCommentRequest,
      CreateCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateComment(ctx, inputReq);
    });
  } else {
    response = await service.CreateComment(ctx, request!);
  }

  return Buffer.from(CreateCommentResponse.encode(response).finish());
}

async function handlePanoAPIUpdateCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UpdateCommentRequest, UpdateCommentResponse>[]
) {
  let request: UpdateCommentRequest;
  let response: UpdateCommentResponse;

  try {
    request = UpdateCommentRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UpdateCommentRequest,
      UpdateCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.UpdateComment(ctx, inputReq);
    });
  } else {
    response = await service.UpdateComment(ctx, request!);
  }

  return Buffer.from(UpdateCommentResponse.encode(response).finish());
}

async function handlePanoAPIDeleteCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteCommentRequest, DeleteCommentResponse>[]
) {
  let request: DeleteCommentRequest;
  let response: DeleteCommentResponse;

  try {
    request = DeleteCommentRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteCommentRequest,
      DeleteCommentResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteComment(ctx, inputReq);
    });
  } else {
    response = await service.DeleteComment(ctx, request!);
  }

  return Buffer.from(DeleteCommentResponse.encode(response).finish());
}

async function handlePanoAPIGetUpvotesProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetUpvotesRequest, GetUpvotesResponse>[]
) {
  let request: GetUpvotesRequest;
  let response: GetUpvotesResponse;

  try {
    request = GetUpvotesRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetUpvotesRequest,
      GetUpvotesResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUpvotes(ctx, inputReq);
    });
  } else {
    response = await service.GetUpvotes(ctx, request!);
  }

  return Buffer.from(GetUpvotesResponse.encode(response).finish());
}

async function handlePanoAPICreateUpvoteProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateUpvoteRequest, CreateUpvoteResponse>[]
) {
  let request: CreateUpvoteRequest;
  let response: CreateUpvoteResponse;

  try {
    request = CreateUpvoteRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateUpvoteRequest,
      CreateUpvoteResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateUpvote(ctx, inputReq);
    });
  } else {
    response = await service.CreateUpvote(ctx, request!);
  }

  return Buffer.from(CreateUpvoteResponse.encode(response).finish());
}

async function handlePanoAPIDeleteUpvoteProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, DeleteUpvoteRequest, DeleteUpvoteResponse>[]
) {
  let request: DeleteUpvoteRequest;
  let response: DeleteUpvoteResponse;

  try {
    request = DeleteUpvoteRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      DeleteUpvoteRequest,
      DeleteUpvoteResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.DeleteUpvote(ctx, inputReq);
    });
  } else {
    response = await service.DeleteUpvote(ctx, request!);
  }

  return Buffer.from(DeleteUpvoteResponse.encode(response).finish());
}

async function handlePanoAPIIsUpvotedProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: PanoAPITwirp,
  data: Buffer,
  interceptors?: Interceptor<T, IsUpvotedRequest, IsUpvotedResponse>[]
) {
  let request: IsUpvotedRequest;
  let response: IsUpvotedResponse;

  try {
    request = IsUpvotedRequest.decode(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      IsUpvotedRequest,
      IsUpvotedResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.IsUpvoted(ctx, inputReq);
    });
  } else {
    response = await service.IsUpvoted(ctx, request!);
  }

  return Buffer.from(IsUpvotedResponse.encode(response).finish());
}
