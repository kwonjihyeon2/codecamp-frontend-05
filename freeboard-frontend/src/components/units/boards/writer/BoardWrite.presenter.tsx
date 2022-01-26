import { ChangeEvent } from "react";
import {
  NewBody,
  Main,
  Title,
  Content,
  CommonInput,
  UserInfo,
  UserDiv,
  UserStar,
  ErrorMessage,
  CommonMargin,
  PostBox,
  PostNum,
  PostBtn,
  TextArea,
  LoadImg,
  GetImg,
  MainChoice,
  Footer,
  FtBtn,
} from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

interface IPropsWriteUI {
  ToPre?: any;
  ErrorName: String;
  WriterName: (event: ChangeEvent<HTMLInputElement>) => void;
  WriterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  ErrorPassword: String;
  WriterTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  ErrorTitle: String;
  WriterContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  ErrorContent: String;
  isActive: boolean;
  register: () => void;
  EditBtn: () => void;
  isEdit: boolean;
  MyYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onTogglePostModal: () => void;
  isModalVisible: boolean;
  onCompleteDaumPostcode: any;
  Address: any;
  zonecode: any;
  data?: any;
  AddressDetail: any;
}

export default function FreeBoardWriteUI(props: IPropsWriteUI) {
  return (
    <NewBody>
      <Main>
        <Title>게시물 {props.isEdit ? "수정" : "등록"}</Title>

        <Content>
          <UserInfo>
            <UserDiv>
              <div>
                작성자<UserStar>*</UserStar>
              </div>
              <CommonInput
                type="text"
                placeholder="이름을 입력하세요."
                onChange={props.WriterName}
                defaultValue={
                  props.isEdit ? props.ToPre?.fetchBoard.writer : ""
                }
                readOnly={!!props.ToPre?.fetchBoard.writer}
              />
              {/* readonly - boolean타입 String안됨 !!이중부정연산자를 사용해서 String을 boolean타입으로 적용시킬 수 있음 */}
              <ErrorMessage>{props.ErrorName}</ErrorMessage>
            </UserDiv>
            <UserDiv>
              <div>비밀번호</div>
              <CommonInput
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={props.WriterPassword}
              />
              <ErrorMessage>{props.ErrorPassword}</ErrorMessage>
            </UserDiv>
          </UserInfo>

          <CommonMargin>
            <div>제목</div>
            <CommonInput
              type="text"
              placeholder="제목을 지정해주세요."
              onChange={props.WriterTitle}
              defaultValue={props.isEdit ? props.ToPre?.fetchBoard.title : ""}
            />
            <ErrorMessage>{props.ErrorTitle}</ErrorMessage>
          </CommonMargin>
          <CommonMargin>
            <div>내용</div>
            <TextArea
              placeholder="내용을 작성해주세요."
              onChange={props.WriterContent}
              defaultValue={
                props.isEdit ? props.ToPre?.fetchBoard.contents : ""
              }
            ></TextArea>
            <ErrorMessage>{props.ErrorContent}</ErrorMessage>
          </CommonMargin>
          <CommonMargin>
            <div>주소</div>
            <PostBox>
              <PostNum
                type="text"
                placeholder="07250"
                readOnly
                value={
                  props.zonecode || props.ToPre?.fetchBoard.boardAddress.zipcode
                }
              />

              <PostBtn onClick={props.onTogglePostModal}> 우편번호검색</PostBtn>
              {props.isModalVisible && (
                <Modal
                  visible={true}
                  onOk={props.onTogglePostModal}
                  onCancel={props.onTogglePostModal}
                >
                  <DaumPostcode onComplete={props.onCompleteDaumPostcode} />
                  <div></div>
                </Modal>
              )}
            </PostBox>
            <CommonInput
              type="text"
              readOnly
              value={
                props.Address || props.ToPre?.fetchBoard.boardAddress.address
              }
            />
            <br />
            <CommonInput
              type="text"
              onChange={props.AddressDetail}
              defaultValue={
                props.isEdit
                  ? // ? props.ToPre?.fetchBoard.boardAddress.addressDetail
                    props.ToPre?.fetchBoard.boardAddress.addressDetail
                  : props.AddressDetail
              }
            />
          </CommonMargin>

          <CommonMargin>
            <div>유튜브</div>
            <CommonInput
              type="text"
              placeholder="링크를 복사해주세요."
              onChange={props.MyYoutube}
              defaultValue={
                props.isEdit ? props.ToPre?.fetchBoard.youtubeUrl : ""
              }
            />
          </CommonMargin>
          <CommonMargin>
            <div>사진 첨부</div>
            <LoadImg>
              <GetImg>
                +<br />
                Upload
              </GetImg>
              <GetImg>
                +<br />
                Upload
              </GetImg>
              <GetImg>
                +<br />
                Upload
              </GetImg>
            </LoadImg>
          </CommonMargin>
          <CommonMargin>
            <div>메인 설정</div>
            <LoadImg>
              <MainChoice type="radio" name="choice" />
              유튜브
              <MainChoice type="radio" name="choice" />
              사진
            </LoadImg>
          </CommonMargin>
        </Content>
        <Footer>
          <FtBtn
            onClick={props.isEdit ? props.EditBtn : props.register}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}{" "}
          </FtBtn>
        </Footer>
      </Main>
    </NewBody>
  );
}
