import {TwirpContext} from "twirp-ts";
import {GetPostsRequest, GetPostsResponse} from "../protos/service";

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

export default {
    GetPosts
}