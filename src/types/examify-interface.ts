export namespace Data {
  export interface UserSigUp {
    id?: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profile: string;
  }

  export interface UserLogin {
    username: string;
    password: string;
  }

  export interface LoginToken {
    token: string;
  }

  export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profile: string;
    enabled: boolean;
    authorities: Authority[];
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
  }

  export interface Authority {
    authority: string;
  }

  export interface Category {
    cId: number;
    title: string;
    description: string;
  }

  export interface Quiz {
    qId: number;
    title: string;
    description: string;
    maxMarks: string;
    numOfQuestions: string;
    active: boolean;
    category: {
      cId: number;
      description?: string;
      title?: string;
    };
  }

  export interface Question {
    quesId: number;
    content: number;
    image: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
    givenAnswer?: string;
    quiz: {
      title?: string;
      qId: number;
      maxMarks?: string;
      numOfQuestions?: string;
    };
  }
}
