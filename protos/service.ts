/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";
import { StringValue } from "./google/protobuf/wrappers";

export const protobufPackage = "kampus.panoapi";

/** Post Start */
export interface Post {
  id: string;
  title: string;
  url: string;
  content: string;
  slug: string;
  userId: string;
}

export interface GetBatchPostsRequest {
  ids: string[];
}

export interface GetBatchPostsResponse {
  posts: Post[];
}

export interface GetPostsRequest {
  limit: number;
  offset: number;
}

export interface GetPostsResponse {
  posts: Post[];
}

export interface CreatePostRequest {
  title: string;
  url: string;
  content: string;
  userId: string;
}

export interface CreatePostResponse {
  post: Post | undefined;
}

export interface UpdatePostRequest {
  id: string;
  title: string | undefined;
  url: string | undefined;
  content: string | undefined;
}

export interface UpdatePostResponse {
}

export interface DeletePostRequest {
  id: string;
}

export interface DeletePostResponse {
}

/** Comment Start */
export interface Comment {
  id: string;
  content: string;
  userId: string;
  postId: string;
  parentId: string;
}

export interface GetBatchCommentsRequest {
  /** required */
  ids: string[];
}

export interface GetBatchCommentsResponse {
  Comments: Comment[];
}

export interface GetCommentsRequest {
  /** default( 10 ) */
  limit: number;
  /** default( 0 ) */
  offset: number;
}

export interface GetCommentsResponse {
  Comments: Comment[];
}

export interface CreateCommentRequest {
  /** required */
  content: string;
  /** required */
  userId: string;
  /** required */
  postId: string;
  parentId: string | undefined;
  deletedAt: Date | undefined;
}

export interface CreateCommentResponse {
  Comment: Comment | undefined;
}

export interface UpdateCommentRequest {
  /** required */
  id: string;
  /** required */
  content: string;
}

export interface UpdateCommentResponse {
  Comment: Comment | undefined;
}

export interface DeleteCommentRequest {
  /** required */
  id: string;
}

export interface DeleteCommentResponse {
  Comment: Comment | undefined;
}

/** Upvote Start */
export interface Upvote {
  id: string;
  entityId: string;
  entityType: string;
  userId: string;
}

export interface GetUpvotesRequest {
  entityId: string;
  entityType: string;
}

export interface GetUpvotesResponse {
  upvotes: Upvote[];
}

export interface CreateUpvoteRequest {
  entityId: string;
  entityType: string;
  userId: string;
}

export interface CreateUpvoteResponse {
  upvote: Upvote | undefined;
}

export interface DeleteUpvoteRequest {
  entityId: string;
  entityType: string;
  userId: string;
}

export interface DeleteUpvoteResponse {
}

export interface IsUpvotedRequest {
  entityId: string;
  entityType: string;
  userId: string;
}

export interface IsUpvotedResponse {
  isUpvoted: boolean;
}

function createBasePost(): Post {
  return { id: "", title: "", url: "", content: "", slug: "", userId: "" };
}

export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    if (message.content !== "") {
      writer.uint32(34).string(message.content);
    }
    if (message.slug !== "") {
      writer.uint32(42).string(message.slug);
    }
    if (message.userId !== "") {
      writer.uint32(50).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.content = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.slug = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Post {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      url: isSet(object.url) ? String(object.url) : "",
      content: isSet(object.content) ? String(object.content) : "",
      slug: isSet(object.slug) ? String(object.slug) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.url !== undefined && (obj.url = message.url);
    message.content !== undefined && (obj.content = message.content);
    message.slug !== undefined && (obj.slug = message.slug);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Post>, I>>(base?: I): Post {
    return Post.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.content = object.content ?? "";
    message.slug = object.slug ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetBatchPostsRequest(): GetBatchPostsRequest {
  return { ids: [] };
}

export const GetBatchPostsRequest = {
  encode(message: GetBatchPostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBatchPostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBatchPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBatchPostsRequest {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetBatchPostsRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBatchPostsRequest>, I>>(base?: I): GetBatchPostsRequest {
    return GetBatchPostsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBatchPostsRequest>, I>>(object: I): GetBatchPostsRequest {
    const message = createBaseGetBatchPostsRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetBatchPostsResponse(): GetBatchPostsResponse {
  return { posts: [] };
}

export const GetBatchPostsResponse = {
  encode(message: GetBatchPostsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBatchPostsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBatchPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.posts.push(Post.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBatchPostsResponse {
    return { posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [] };
  },

  toJSON(message: GetBatchPostsResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBatchPostsResponse>, I>>(base?: I): GetBatchPostsResponse {
    return GetBatchPostsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBatchPostsResponse>, I>>(object: I): GetBatchPostsResponse {
    const message = createBaseGetBatchPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPostsRequest(): GetPostsRequest {
  return { limit: 0, offset: 0 };
}

export const GetPostsRequest = {
  encode(message: GetPostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPostsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.limit = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.offset = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPostsRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: GetPostsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostsRequest>, I>>(base?: I): GetPostsRequest {
    return GetPostsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostsRequest>, I>>(object: I): GetPostsRequest {
    const message = createBaseGetPostsRequest();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseGetPostsResponse(): GetPostsResponse {
  return { posts: [] };
}

export const GetPostsResponse = {
  encode(message: GetPostsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPostsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.posts.push(Post.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPostsResponse {
    return { posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [] };
  },

  toJSON(message: GetPostsResponse): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPostsResponse>, I>>(base?: I): GetPostsResponse {
    return GetPostsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPostsResponse>, I>>(object: I): GetPostsResponse {
    const message = createBaseGetPostsResponse();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreatePostRequest(): CreatePostRequest {
  return { title: "", url: "", content: "", userId: "" };
}

export const CreatePostRequest = {
  encode(message: CreatePostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.content = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePostRequest {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      url: isSet(object.url) ? String(object.url) : "",
      content: isSet(object.content) ? String(object.content) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: CreatePostRequest): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.url !== undefined && (obj.url = message.url);
    message.content !== undefined && (obj.content = message.content);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePostRequest>, I>>(base?: I): CreatePostRequest {
    return CreatePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostRequest>, I>>(object: I): CreatePostRequest {
    const message = createBaseCreatePostRequest();
    message.title = object.title ?? "";
    message.url = object.url ?? "";
    message.content = object.content ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseCreatePostResponse(): CreatePostResponse {
  return { post: undefined };
}

export const CreatePostResponse = {
  encode(message: CreatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.post = Post.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePostResponse {
    return { post: isSet(object.post) ? Post.fromJSON(object.post) : undefined };
  },

  toJSON(message: CreatePostResponse): unknown {
    const obj: any = {};
    message.post !== undefined && (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePostResponse>, I>>(base?: I): CreatePostResponse {
    return CreatePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostResponse>, I>>(object: I): CreatePostResponse {
    const message = createBaseCreatePostResponse();
    message.post = (object.post !== undefined && object.post !== null) ? Post.fromPartial(object.post) : undefined;
    return message;
  },
};

function createBaseUpdatePostRequest(): UpdatePostRequest {
  return { id: "", title: undefined, url: undefined, content: undefined };
}

export const UpdatePostRequest = {
  encode(message: UpdatePostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== undefined) {
      StringValue.encode({ value: message.title! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.url !== undefined) {
      StringValue.encode({ value: message.url! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.content !== undefined) {
      StringValue.encode({ value: message.content! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePostRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.content = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : undefined,
      url: isSet(object.url) ? String(object.url) : undefined,
      content: isSet(object.content) ? String(object.content) : undefined,
    };
  },

  toJSON(message: UpdatePostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.url !== undefined && (obj.url = message.url);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePostRequest>, I>>(base?: I): UpdatePostRequest {
    return UpdatePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePostRequest>, I>>(object: I): UpdatePostRequest {
    const message = createBaseUpdatePostRequest();
    message.id = object.id ?? "";
    message.title = object.title ?? undefined;
    message.url = object.url ?? undefined;
    message.content = object.content ?? undefined;
    return message;
  },
};

function createBaseUpdatePostResponse(): UpdatePostResponse {
  return {};
}

export const UpdatePostResponse = {
  encode(_: UpdatePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdatePostResponse {
    return {};
  },

  toJSON(_: UpdatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdatePostResponse>, I>>(base?: I): UpdatePostResponse {
    return UpdatePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePostResponse>, I>>(_: I): UpdatePostResponse {
    const message = createBaseUpdatePostResponse();
    return message;
  },
};

function createBaseDeletePostRequest(): DeletePostRequest {
  return { id: "" };
}

export const DeletePostRequest = {
  encode(message: DeletePostRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePostRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePostRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeletePostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostRequest>, I>>(base?: I): DeletePostRequest {
    return DeletePostRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostRequest>, I>>(object: I): DeletePostRequest {
    const message = createBaseDeletePostRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeletePostResponse(): DeletePostResponse {
  return {};
}

export const DeletePostResponse = {
  encode(_: DeletePostResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePostResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeletePostResponse {
    return {};
  },

  toJSON(_: DeletePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeletePostResponse>, I>>(base?: I): DeletePostResponse {
    return DeletePostResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeletePostResponse>, I>>(_: I): DeletePostResponse {
    const message = createBaseDeletePostResponse();
    return message;
  },
};

function createBaseComment(): Comment {
  return { id: "", content: "", userId: "", postId: "", parentId: "" };
}

export const Comment = {
  encode(message: Comment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.postId !== "") {
      writer.uint32(34).string(message.postId);
    }
    if (message.parentId !== "") {
      writer.uint32(42).string(message.parentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.content = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.postId = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.parentId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Comment {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      content: isSet(object.content) ? String(object.content) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      postId: isSet(object.postId) ? String(object.postId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
    };
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.content !== undefined && (obj.content = message.content);
    message.userId !== undefined && (obj.userId = message.userId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Comment>, I>>(base?: I): Comment {
    return Comment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Comment>, I>>(object: I): Comment {
    const message = createBaseComment();
    message.id = object.id ?? "";
    message.content = object.content ?? "";
    message.userId = object.userId ?? "";
    message.postId = object.postId ?? "";
    message.parentId = object.parentId ?? "";
    return message;
  },
};

function createBaseGetBatchCommentsRequest(): GetBatchCommentsRequest {
  return { ids: [] };
}

export const GetBatchCommentsRequest = {
  encode(message: GetBatchCommentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBatchCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBatchCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBatchCommentsRequest {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetBatchCommentsRequest): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBatchCommentsRequest>, I>>(base?: I): GetBatchCommentsRequest {
    return GetBatchCommentsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBatchCommentsRequest>, I>>(object: I): GetBatchCommentsRequest {
    const message = createBaseGetBatchCommentsRequest();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetBatchCommentsResponse(): GetBatchCommentsResponse {
  return { Comments: [] };
}

export const GetBatchCommentsResponse = {
  encode(message: GetBatchCommentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Comments) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBatchCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBatchCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Comments.push(Comment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBatchCommentsResponse {
    return { Comments: Array.isArray(object?.Comments) ? object.Comments.map((e: any) => Comment.fromJSON(e)) : [] };
  },

  toJSON(message: GetBatchCommentsResponse): unknown {
    const obj: any = {};
    if (message.Comments) {
      obj.Comments = message.Comments.map((e) => e ? Comment.toJSON(e) : undefined);
    } else {
      obj.Comments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBatchCommentsResponse>, I>>(base?: I): GetBatchCommentsResponse {
    return GetBatchCommentsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBatchCommentsResponse>, I>>(object: I): GetBatchCommentsResponse {
    const message = createBaseGetBatchCommentsResponse();
    message.Comments = object.Comments?.map((e) => Comment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCommentsRequest(): GetCommentsRequest {
  return { limit: 0, offset: 0 };
}

export const GetCommentsRequest = {
  encode(message: GetCommentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.limit = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.offset = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCommentsRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: GetCommentsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommentsRequest>, I>>(base?: I): GetCommentsRequest {
    return GetCommentsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommentsRequest>, I>>(object: I): GetCommentsRequest {
    const message = createBaseGetCommentsRequest();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseGetCommentsResponse(): GetCommentsResponse {
  return { Comments: [] };
}

export const GetCommentsResponse = {
  encode(message: GetCommentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Comments) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Comments.push(Comment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCommentsResponse {
    return { Comments: Array.isArray(object?.Comments) ? object.Comments.map((e: any) => Comment.fromJSON(e)) : [] };
  },

  toJSON(message: GetCommentsResponse): unknown {
    const obj: any = {};
    if (message.Comments) {
      obj.Comments = message.Comments.map((e) => e ? Comment.toJSON(e) : undefined);
    } else {
      obj.Comments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCommentsResponse>, I>>(base?: I): GetCommentsResponse {
    return GetCommentsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCommentsResponse>, I>>(object: I): GetCommentsResponse {
    const message = createBaseGetCommentsResponse();
    message.Comments = object.Comments?.map((e) => Comment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateCommentRequest(): CreateCommentRequest {
  return { content: "", userId: "", postId: "", parentId: undefined, deletedAt: undefined };
}

export const CreateCommentRequest = {
  encode(message: CreateCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    if (message.postId !== "") {
      writer.uint32(26).string(message.postId);
    }
    if (message.parentId !== undefined) {
      StringValue.encode({ value: message.parentId! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.content = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.postId = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.parentId = StringValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCommentRequest {
    return {
      content: isSet(object.content) ? String(object.content) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      postId: isSet(object.postId) ? String(object.postId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
    };
  },

  toJSON(message: CreateCommentRequest): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    message.userId !== undefined && (obj.userId = message.userId);
    message.postId !== undefined && (obj.postId = message.postId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    message.deletedAt !== undefined && (obj.deletedAt = message.deletedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentRequest>, I>>(base?: I): CreateCommentRequest {
    return CreateCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentRequest>, I>>(object: I): CreateCommentRequest {
    const message = createBaseCreateCommentRequest();
    message.content = object.content ?? "";
    message.userId = object.userId ?? "";
    message.postId = object.postId ?? "";
    message.parentId = object.parentId ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    return message;
  },
};

function createBaseCreateCommentResponse(): CreateCommentResponse {
  return { Comment: undefined };
}

export const CreateCommentResponse = {
  encode(message: CreateCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCommentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Comment = Comment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateCommentResponse {
    return { Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined };
  },

  toJSON(message: CreateCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined && (obj.Comment = message.Comment ? Comment.toJSON(message.Comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateCommentResponse>, I>>(base?: I): CreateCommentResponse {
    return CreateCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentResponse>, I>>(object: I): CreateCommentResponse {
    const message = createBaseCreateCommentResponse();
    message.Comment = (object.Comment !== undefined && object.Comment !== null)
      ? Comment.fromPartial(object.Comment)
      : undefined;
    return message;
  },
};

function createBaseUpdateCommentRequest(): UpdateCommentRequest {
  return { id: "", content: "" };
}

export const UpdateCommentRequest = {
  encode(message: UpdateCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.content = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCommentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: UpdateCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCommentRequest>, I>>(base?: I): UpdateCommentRequest {
    return UpdateCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCommentRequest>, I>>(object: I): UpdateCommentRequest {
    const message = createBaseUpdateCommentRequest();
    message.id = object.id ?? "";
    message.content = object.content ?? "";
    return message;
  },
};

function createBaseUpdateCommentResponse(): UpdateCommentResponse {
  return { Comment: undefined };
}

export const UpdateCommentResponse = {
  encode(message: UpdateCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCommentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Comment = Comment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateCommentResponse {
    return { Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined };
  },

  toJSON(message: UpdateCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined && (obj.Comment = message.Comment ? Comment.toJSON(message.Comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCommentResponse>, I>>(base?: I): UpdateCommentResponse {
    return UpdateCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCommentResponse>, I>>(object: I): UpdateCommentResponse {
    const message = createBaseUpdateCommentResponse();
    message.Comment = (object.Comment !== undefined && object.Comment !== null)
      ? Comment.fromPartial(object.Comment)
      : undefined;
    return message;
  },
};

function createBaseDeleteCommentRequest(): DeleteCommentRequest {
  return { id: "" };
}

export const DeleteCommentRequest = {
  encode(message: DeleteCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCommentRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DeleteCommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentRequest>, I>>(base?: I): DeleteCommentRequest {
    return DeleteCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentRequest>, I>>(object: I): DeleteCommentRequest {
    const message = createBaseDeleteCommentRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteCommentResponse(): DeleteCommentResponse {
  return { Comment: undefined };
}

export const DeleteCommentResponse = {
  encode(message: DeleteCommentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteCommentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.Comment = Comment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteCommentResponse {
    return { Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined };
  },

  toJSON(message: DeleteCommentResponse): unknown {
    const obj: any = {};
    message.Comment !== undefined && (obj.Comment = message.Comment ? Comment.toJSON(message.Comment) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteCommentResponse>, I>>(base?: I): DeleteCommentResponse {
    return DeleteCommentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentResponse>, I>>(object: I): DeleteCommentResponse {
    const message = createBaseDeleteCommentResponse();
    message.Comment = (object.Comment !== undefined && object.Comment !== null)
      ? Comment.fromPartial(object.Comment)
      : undefined;
    return message;
  },
};

function createBaseUpvote(): Upvote {
  return { id: "", entityId: "", entityType: "", userId: "" };
}

export const Upvote = {
  encode(message: Upvote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.entityType !== "") {
      writer.uint32(26).string(message.entityType);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Upvote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpvote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.entityType = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Upvote {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: Upvote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<Upvote>, I>>(base?: I): Upvote {
    return Upvote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Upvote>, I>>(object: I): Upvote {
    const message = createBaseUpvote();
    message.id = object.id ?? "";
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetUpvotesRequest(): GetUpvotesRequest {
  return { entityId: "", entityType: "" };
}

export const GetUpvotesRequest = {
  encode(message: GetUpvotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUpvotesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUpvotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityType = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUpvotesRequest {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
    };
  },

  toJSON(message: GetUpvotesRequest): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUpvotesRequest>, I>>(base?: I): GetUpvotesRequest {
    return GetUpvotesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUpvotesRequest>, I>>(object: I): GetUpvotesRequest {
    const message = createBaseGetUpvotesRequest();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    return message;
  },
};

function createBaseGetUpvotesResponse(): GetUpvotesResponse {
  return { upvotes: [] };
}

export const GetUpvotesResponse = {
  encode(message: GetUpvotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.upvotes) {
      Upvote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUpvotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUpvotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.upvotes.push(Upvote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUpvotesResponse {
    return { upvotes: Array.isArray(object?.upvotes) ? object.upvotes.map((e: any) => Upvote.fromJSON(e)) : [] };
  },

  toJSON(message: GetUpvotesResponse): unknown {
    const obj: any = {};
    if (message.upvotes) {
      obj.upvotes = message.upvotes.map((e) => e ? Upvote.toJSON(e) : undefined);
    } else {
      obj.upvotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUpvotesResponse>, I>>(base?: I): GetUpvotesResponse {
    return GetUpvotesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUpvotesResponse>, I>>(object: I): GetUpvotesResponse {
    const message = createBaseGetUpvotesResponse();
    message.upvotes = object.upvotes?.map((e) => Upvote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateUpvoteRequest(): CreateUpvoteRequest {
  return { entityId: "", entityType: "", userId: "" };
}

export const CreateUpvoteRequest = {
  encode(message: CreateUpvoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUpvoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUpvoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityType = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUpvoteRequest {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: CreateUpvoteRequest): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUpvoteRequest>, I>>(base?: I): CreateUpvoteRequest {
    return CreateUpvoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUpvoteRequest>, I>>(object: I): CreateUpvoteRequest {
    const message = createBaseCreateUpvoteRequest();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseCreateUpvoteResponse(): CreateUpvoteResponse {
  return { upvote: undefined };
}

export const CreateUpvoteResponse = {
  encode(message: CreateUpvoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upvote !== undefined) {
      Upvote.encode(message.upvote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUpvoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUpvoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.upvote = Upvote.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUpvoteResponse {
    return { upvote: isSet(object.upvote) ? Upvote.fromJSON(object.upvote) : undefined };
  },

  toJSON(message: CreateUpvoteResponse): unknown {
    const obj: any = {};
    message.upvote !== undefined && (obj.upvote = message.upvote ? Upvote.toJSON(message.upvote) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUpvoteResponse>, I>>(base?: I): CreateUpvoteResponse {
    return CreateUpvoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUpvoteResponse>, I>>(object: I): CreateUpvoteResponse {
    const message = createBaseCreateUpvoteResponse();
    message.upvote = (object.upvote !== undefined && object.upvote !== null)
      ? Upvote.fromPartial(object.upvote)
      : undefined;
    return message;
  },
};

function createBaseDeleteUpvoteRequest(): DeleteUpvoteRequest {
  return { entityId: "", entityType: "", userId: "" };
}

export const DeleteUpvoteRequest = {
  encode(message: DeleteUpvoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUpvoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUpvoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityType = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUpvoteRequest {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: DeleteUpvoteRequest): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUpvoteRequest>, I>>(base?: I): DeleteUpvoteRequest {
    return DeleteUpvoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUpvoteRequest>, I>>(object: I): DeleteUpvoteRequest {
    const message = createBaseDeleteUpvoteRequest();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseDeleteUpvoteResponse(): DeleteUpvoteResponse {
  return {};
}

export const DeleteUpvoteResponse = {
  encode(_: DeleteUpvoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUpvoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUpvoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteUpvoteResponse {
    return {};
  },

  toJSON(_: DeleteUpvoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUpvoteResponse>, I>>(base?: I): DeleteUpvoteResponse {
    return DeleteUpvoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUpvoteResponse>, I>>(_: I): DeleteUpvoteResponse {
    const message = createBaseDeleteUpvoteResponse();
    return message;
  },
};

function createBaseIsUpvotedRequest(): IsUpvotedRequest {
  return { entityId: "", entityType: "", userId: "" };
}

export const IsUpvotedRequest = {
  encode(message: IsUpvotedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsUpvotedRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsUpvotedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.entityType = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsUpvotedRequest {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entityType: isSet(object.entityType) ? String(object.entityType) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: IsUpvotedRequest): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  create<I extends Exact<DeepPartial<IsUpvotedRequest>, I>>(base?: I): IsUpvotedRequest {
    return IsUpvotedRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IsUpvotedRequest>, I>>(object: I): IsUpvotedRequest {
    const message = createBaseIsUpvotedRequest();
    message.entityId = object.entityId ?? "";
    message.entityType = object.entityType ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseIsUpvotedResponse(): IsUpvotedResponse {
  return { isUpvoted: false };
}

export const IsUpvotedResponse = {
  encode(message: IsUpvotedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isUpvoted === true) {
      writer.uint32(8).bool(message.isUpvoted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsUpvotedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsUpvotedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.isUpvoted = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IsUpvotedResponse {
    return { isUpvoted: isSet(object.isUpvoted) ? Boolean(object.isUpvoted) : false };
  },

  toJSON(message: IsUpvotedResponse): unknown {
    const obj: any = {};
    message.isUpvoted !== undefined && (obj.isUpvoted = message.isUpvoted);
    return obj;
  },

  create<I extends Exact<DeepPartial<IsUpvotedResponse>, I>>(base?: I): IsUpvotedResponse {
    return IsUpvotedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IsUpvotedResponse>, I>>(object: I): IsUpvotedResponse {
    const message = createBaseIsUpvotedResponse();
    message.isUpvoted = object.isUpvoted ?? false;
    return message;
  },
};

export interface PanoAPI {
  /** Post */
  GetBatchPosts(request: GetBatchPostsRequest): Promise<GetBatchPostsResponse>;
  GetPosts(request: GetPostsRequest): Promise<GetPostsResponse>;
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse>;
  UpdatePost(request: UpdatePostRequest): Promise<UpdatePostResponse>;
  DeletePost(request: DeletePostRequest): Promise<DeletePostResponse>;
  /** Comment */
  GetBatchComments(request: GetBatchCommentsRequest): Promise<GetBatchCommentsResponse>;
  GetComments(request: GetCommentsRequest): Promise<GetCommentsResponse>;
  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse>;
  UpdateComment(request: UpdateCommentRequest): Promise<UpdateCommentResponse>;
  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse>;
  /** Upvote */
  GetUpvotes(request: GetUpvotesRequest): Promise<GetUpvotesResponse>;
  CreateUpvote(request: CreateUpvoteRequest): Promise<CreateUpvoteResponse>;
  DeleteUpvote(request: DeleteUpvoteRequest): Promise<DeleteUpvoteResponse>;
  IsUpvoted(request: IsUpvotedRequest): Promise<IsUpvotedResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
