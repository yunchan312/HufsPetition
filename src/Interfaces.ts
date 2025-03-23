export interface petitionsDataInterface {
  id: number;
  title: string;
  category: string;
  content: string;
  petitionStatus: string;
  agreeCount: number;
  viewCount: number;
  reportCount: number;
  writerEmail: string;
  links: string[];
  createDate: string;
  endDate: string;
  answerResponses: AnswerResponses[];
}

export interface AnswerResponses {
  answerId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writerAdminInfo: {
    adminId: number;
    departure: string;
    email: string;
    phoneNumber: string;
    role: string;
  };
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: {
    code: string;
    isSuccess: boolean;
    message: string;
    result: {
      authId: number;
      email: string;
      role: string;
      tokenDto: {
        accessToken: string;
        refreshToken: string;
      };
    };
  };
}

export interface SignUpFormProps {
  email: string;
  code: string;
  password: string;
  passwordCheck: string;
}

export interface PetitionFormProps {
  title: string;
  category: string;
  content: string;
  links: string[];
}

export interface AgreeForm {
  agree: string;
}

export interface PetitionDetailProps {
  agreeCount: number;
  category: string;
  content: string;
  createDate: string;
  endDate: string;
  id: number;
  petitionStatus: string;
  reportCount: number;
  title: string;
  viewCount: number;
  writerEmail: string;
  links: string[];
  asnwerResponses: AnswerResponses;
}

export interface PetitionStats {
  answeredCount?: number;
  expiredCount?: number;
  ongoingCount?: number;
  thresholdAgreeCount?: number;
  thresholdReachedCount?: number;
  totalAgreementCount?: number;
  waitingCount?: number;
}

export interface AgreementsProps {
  agreementId: number;
  petitionId: number;
  agreementUserId: number;
  agreementUserEmail: string;
  createdAt: string;
}

export interface BoardContent {
  id: number;
  writer: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  boardType: string;
}

export interface ReplyProps {
  reply: string;
}

export interface BoardInterface {
  boardType: string;
  content: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  writer: string;
}

export interface NoticeDetailProps {
  id: number;
  writer: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  boardType: string;
}

export interface BoardFormInterface {
  title: string;
  detail: string;
  writer: string;
  key: string;
  type: string;
}
