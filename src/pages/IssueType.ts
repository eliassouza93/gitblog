export type IssueType = {
    comments: ReactNode;
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
    user: {
      login: string;
      html_url: string;
      avatar_url: string;
    };
  };