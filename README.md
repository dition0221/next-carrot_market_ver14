# Next - Carrot Market clone coding (ver.14 - App Router)

### NextJS (Ver.14 App Router), Tailwind, Prisma, PlanetScale, Cloudflare를 사용해 serverless '당근마켓'을 클론코딩합니다.

##### Serverless 'CARROT MARKET' clone coding using NextJS (Ver.14 App Router), Tailwind, Prisma, PlanetScale, Cloudflare.

- "react": "^18"
- "react-dom": "^18"
- "next": "14.2.2"

<img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>

<!-- Front-End : <img src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white"/> <img src="https://img.shields.io/badge/SWR-000?style=flat-square&logo=swr&logoColor=white"/>
Back-End : <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white"/> <img src="https://img.shields.io/badge/PlanetScale-000?style=flat-square&logo=planetscale&logoColor=white"/> <img src="https://img.shields.io/badge/iron&dash;session-18303d?style=flat-square&logoColor=white"/>
3rd party : <img src="https://img.shields.io/badge/Twilio-f22f46?style=flat-square&logo=twilio&logoColor=white"/> <img src="https://img.shields.io/badge/Nodemailer-22B573?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white"/>
etc : <img src="https://img.shields.io/badge/react&dash;intersection&dash;observer-000?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/timeago.js-000?style=flat-square&logoColor=white"/> -->

---

- **24-04-19 : #2.0 ~ #3.6 / Introduction + Tailwind (1)**
  - NextJS 프로젝트 시작
    - 기본형 : `npx create-next-app@latest`
  - Prisma
    - ORM(Object Relational Mapper) 中 하나
      - ORM : 객체와 관계형 DB의 데이터를 자동으로 매핑해주는 것
      - 객체 형식을 사용해 SQL 쿼리로 바꿔줌
    - client를 생성해서 DB에 직접 통신할 수 있음
    - 다양한 DB를 지원함
  - PlanetScale
    - serverless MySQL DB
      - serverless : 직접 서버를 관리할 필요 x
  - Tailwind CSS
    - Utility-First : 작은 class명들로 가득한 큰 CSS 파일처럼 사용하는 library
    - 사용법 : HTML 요소에 class명을 사용하여 해당 요소에 스타일을 적용
  - Tailwind CSS IntelliSense
    - Tailwind 사용 시 도움을 제공하는 확장 프로그램
      - 자동완성, 중복 class 검사, 오타 등의 기능 제공
    - `tailwind.config.ts` 파일을 검사함
      - `theme` 부분을 빈 객체로 만들기
    - `ctrl + space` : 강제로 자동완성 기능을 불러오는 단축키
  - [Tailwind] modifier
    - 스타일을 조건부로 적용할 수 있도록 해줌
    - 기본형 : `조건부:스타일명`
      - ex. `hover:text-white`
  - [Tailwind] ring 클래스
    - HTML 요소에 ring 고리 스타일을 제공함
    - 기본형
      - `ring` : 고리의 두께, 색상 등을 설정 가능
      - `ring-offset` : 요소와 고리 사이의 두께, 색상 등을 설정 가능
  - [Tailwind] 반응형 modifier
    - 미디어 쿼리 사용없이, 조건부로 반응형 스타일을 적용
    - Tailwind는 모바일 우선 스타일을 적용함
      - 작은 기기부터 큰 기기 순성로 스타일을 만들어야 함
    - 기본형 : `반응형:스타일명`
      - { ms, md, lg, xl, 2xl }
  - [Tailwind] Gradient
    - 기본형 : `bg-gradient-to-방향 from-색상 to-색상`
      - ex. `bg-gradient-to-tr from-cyan-500 to-purple-500`
    - 중간에 색상을 추가하고 싶다면 `via-색상`을 입력
  - [CSS] &lt;form&gt;과 관련된 modifier
    - `invalid` : 입력값이 유효하지 않을 시의 조건부
    - `valid` : 입력값이 유효할 시의 조건부
  - [Tailwind] 가상 선택자 (Pseudo Selector)
    - `peer` : 형제 요소 선택자
      - 기본형 : `peer/이름`, `peer-조건부/이름:스타일명`
      - ex.
        ```
        <form>
          <input type="text" className="peer" />
          <button className="peer-invalid:bg-red-500">Submit</button>
        </form>
        ```
    - `group` : 자식 요소 선택자
      - 기본형 : `group/이름`, `group-조건부/이름:스타일명`
      - ex.
        ```
        <form className="group/form">
          <input type="text" className="group" />
          <button className="group-hover/form:bg-blue-500">Submit</button>
        </form>
        ```
- **24-04-23 : #3.7 ~ #4.3 / Tailwind (2) + Authentication UI**
