import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../Components/PageTitle";
import Markdown from "react-markdown";

const Legals = () => {
  const [params] = useSearchParams();
  const [legal, setLegal] = useState(false);
  const use = `## 회원가입

- 한국외국어대학교 이메일(@hufs.ac.kr)로만 가입 가능
- 이메일과 비밀번호만 수집 (개인정보 최소화)
- 비밀번호는 암호화하여 안전하게 저장

## 청원 등록 및 운영

- 회원만 청원 등록 및 동의 가능
- 청원은 게시 후 14일간 동의 수집
- 동의 10개 이상 받은 청원은 '답변 대기' 상태로 전환
- 한 사람당 청원별 1회만 동의 가능

## 청원 답변

- 시범 운영 기간 동안 운영자가 직접 해당 부서에 전달
- 답변이 제공된 청원은 '답변 완료' 상태로 변경

## 금지 행위

- 욕설, 비방, 명예훼손, 차별적 내용 게시
- 개인정보 유출 우려가 있는 내용 게시
- 사실 확인이 불가능한 내용 게시
- 광고, 홍보, 상업적 내용 게시
- 동일/유사 내용의 중복 청원 등록

## 운영 원칙

- 운영자는 금지 행위에 해당하는 청원을 삭제 또는 비공개 처리 가능
- 부정 이용 시 계정 이용 제한 가능
- 청원과 답변 내용은 서비스를 통해 공개`;
  const personal = `한국외국어대학교 청원 웹 서비스('https://sinmungo.hufs.ac.kr', 이하 ‘한국외대 신문고')는 이용자의 개인정보 보호를 매우 중요하게 생각하며, 「개인정보 보호법」등 관련 법령을 준수하기 위해 노력하고 있습니다. 이에 청원 서비스는 아래와 같이 개인정보처리방침을 수립하여 공개합니다.

## 제1조 (개인정보의 처리 목적)

청원 서비스는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 회원가입 및 관리
    - 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 등을 목적으로 개인정보를 처리합니다.
2. 청원 서비스 제공
    - 청원 등록, 동의 처리, 답변 등록 및 관리 등의 서비스 제공을 목적으로 개인정보를 처리합니다.

## 제2조 (처리하는 개인정보의 항목)

청원 서비스는 다음의 개인정보 항목을 처리하고 있습니다.

1. 회원가입 및 서비스 이용 시 처리하는 개인정보
    - 필수항목: 이메일 계정(학교 이메일 @hufs.ac.kr), 비밀번호

청원 서비스는 이메일 주소 외에 실명, 학번, 전화번호, 주소 등 다른 개인정보는 수집하지 않습니다.

## 제3조 (개인정보의 처리 및 보유기간)

청원 서비스는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보 수집 시 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

각 개인정보의 처리 및 보유 기간은 다음과 같습니다:

1. 회원가입 정보: 회원 탈퇴 시까지
    - 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
        - 서비스 이용에 따른 분쟁처리: 관련 분쟁 처리 완료 시까지
        - 부정이용 방지: 부정이용 방지를 위한 필요기간

## 제4조 (개인정보의 안전성 확보 조치)

청원 서비스는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:

1. 관리적 조치: 내부관리계획 수립·시행, 정기적 교육 실시 등
2. 기술적 조치:
    - 비밀번호는 일방향 암호화하여 저장·관리
    - 개인정보 암호화 저장
    - 접속기록의 보관 및 위·변조 방지 조치
    - 보안프로그램 설치 및 주기적 점검·갱신
    - 접근통제시스템 설치 및 운영

## 제5조 (이용자의 권리·의무 및 행사방법)

이용자는 청원 서비스에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제 요구
4. 처리정지 요구

권리 행사는 청원 서비스에 대해 서면, 전자우편 등을 통하여 하실 수 있으며, 청원 서비스는 이에 대해 지체 없이 조치하겠습니다.

이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 청원 서비스는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제3자에게 제공하지 않습니다.

개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 이용자의 권리가 제한될 수 있습니다.

## 제6조 (개인정보의 제3자 제공)

청원 서비스는 이용자의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 이용자의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

현재 청원 서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다.

## 제7조 (개인정보의 파기)

청원 서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

파기 절차 및 방법은 다음과 같습니다:

1. 파기절차
    - 이용자가 회원가입 등을 위해 입력한 정보는 목적 달성 후 내부 방침 및 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
2. 파기방법
    - 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 파기합니다.

## 제8조 (개인정보 보호책임자)

청원 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

- 개인정보 보호책임자
    - 성명: [담당자명]
    - 직책: [담당자 직책]
    - 연락처: [이메일 주소]

이용자는 청원 서비스의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 청원 서비스는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

## 제9조 (개인정보 처리방침 변경)

이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.

## 제10조 (개인정보의 안전성 확보 조치)

청원 서비스는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.

1. 개인정보 암호화
    - 이용자의 비밀번호는 일방향 암호화하여 저장 및 관리하고 있습니다.
2. 해킹 등에 대비한 기술적 대책
    - 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며, 외부로부터 접근이 통제된 구역에 시스템을 설치하고 감시 및 차단하고 있습니다.
3. 개인정보처리시스템 접근 제한
    - 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위한 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.

## 부칙

이 개인정보처리방침은 2025년 5월 12일부터 적용됩니다.
`;

  useEffect(() => {
    const status = params.get("policy");
    setLegal(JSON.parse(status!));
  }, [params.get("policy")]);

  return (
    <div className="w-full pt-[80px] px-10">
      <PageTitle
        title={
          legal
            ? "한국외국어대학교 청원 웹 서비스 이용 정책"
            : "한국외국어대학교 청원 웹 서비스 개인정보처리방침"
        }
      />
      <div className="markdown">
        <Markdown>{legal ? use : personal}</Markdown>
      </div>
    </div>
  );
};

export default Legals;
