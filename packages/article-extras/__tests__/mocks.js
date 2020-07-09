/* eslint-disable import/prefer-default-export */

import { mockUserState } from "@tcn/user-state";

export const UserState = mockUserState();

jest.mock("@tcn/article-comments", () => "ArticleComments");
jest.mock("@tcn/article-topics", () => "ArticleTopics");
jest.mock("@tcn/related-articles", () => "RelatedArticles");
