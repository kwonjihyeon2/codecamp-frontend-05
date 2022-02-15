import { IPropsWriteUI } from "./BoardWrite.types";
import * as S from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploadfile from "../../../commons-components/Upload/boardimage/Uploadcomponent";
import { v4 as uuidv4 } from "uuid";

export default function FreeBoardWriteUI(props: IPropsWriteUI) {
  return (
    <>
      <S.NewBody>
        <S.Main>
          <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
          <S.Content>
            <S.UserInfo>
              <S.UserDiv>
                <div>
                  작성자<S.UserStar>*</S.UserStar>
                </div>
                <S.CommonInput
                  type="text"
                  placeholder="이름을 입력하세요."
                  id="writer"
                  onChange={props.onChangeInputs}
                  defaultValue={
                    props.isEdit ? props.ToPre?.fetchBoard.writer : ""
                  }
                  readOnly={!!props.ToPre?.fetchBoard.writer}
                />
                {/* readonly - boolean타입 String안됨 !!이중부정연산자를 사용해서 String을 boolean타입으로 적용시킬 수 있음 */}
                <S.ErrorMessage>{props.ErrorName}</S.ErrorMessage>
              </S.UserDiv>
              <S.UserDiv>
                <div>비밀번호</div>
                <S.CommonInput
                  type="password"
                  id="password"
                  placeholder="비밀번호를 입력하세요."
                  onChange={props.onChangeInputs}
                />
                <S.ErrorMessage>{props.ErrorPassword}</S.ErrorMessage>
              </S.UserDiv>
            </S.UserInfo>

            <S.CommonMargin>
              <div>제목</div>
              <S.CommonInput
                type="text"
                id="title"
                placeholder="제목을 지정해주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.isEdit ? props.ToPre?.fetchBoard.title : ""}
              />
              <S.ErrorMessage>{props.ErrorTitle}</S.ErrorMessage>
            </S.CommonMargin>
            <S.CommonMargin>
              <div>내용</div>
              <S.TextArea
                placeholder="내용을 작성해주세요."
                onChange={props.WriterContent}
                defaultValue={
                  props.isEdit ? props.ToPre?.fetchBoard.contents : ""
                }
              ></S.TextArea>
              <S.ErrorMessage>{props.ErrorContent}</S.ErrorMessage>
            </S.CommonMargin>
            <S.CommonMargin>
              <div>주소</div>
              <S.PostBox>
                <S.PostNum
                  type="text"
                  placeholder="07250"
                  readOnly
                  value={
                    props.zonecode ||
                    props.ToPre?.fetchBoard?.boardAddress?.zipcode
                  }
                />

                <S.PostBtn onClick={props.onTogglePostModal}>
                  {" "}
                  우편번호검색
                </S.PostBtn>
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
              </S.PostBox>
              <S.CommonInput
                type="text"
                readOnly
                value={
                  props.Address ||
                  props.ToPre?.fetchBoard?.boardAddress?.address
                }
              />
              <br />
              <S.CommonInput
                type="text"
                onChange={props.AddressDetail}
                defaultValue={
                  props.isEdit
                    ? props.ToPre?.fetchBoard?.boardAddress?.addressDetail
                    : props.AddressDetail
                }
              />
            </S.CommonMargin>

            <S.CommonMargin>
              <div>유튜브</div>
              <S.CommonInput
                type="text"
                id="youtubeUrl"
                placeholder="링크를 복사해주세요."
                onChange={props.onChangeInputs}
                defaultValue={
                  props.isEdit ? props.ToPre?.fetchBoard.youtubeUrl : ""
                }
              />
            </S.CommonMargin>
            <S.CommonMargin>
              <div>사진 첨부</div>
              {props.files.map((el: any, index: number) => (
                <div key={uuidv4()}>
                  <Uploadfile
                    fileUrl={el}
                    index={index}
                    onChangeUrls={props.onChangeUrls}
                  />
                </div>
              ))}
            </S.CommonMargin>
            <S.CommonMargin>
              <div>메인 설정</div>
              <S.LoadImg>
                <S.MainChoice type="radio" name="choice" />
                유튜브
                <S.MainChoice type="radio" name="choice" />
                사진
              </S.LoadImg>
            </S.CommonMargin>
          </S.Content>
          <S.Footer>
            <S.FtBtn
              onClick={props.isEdit ? props.EditBtn : props.register}
              isActive={props.isActive}
            >
              {props.isEdit ? "수정하기" : "등록하기"}{" "}
            </S.FtBtn>
          </S.Footer>
        </S.Main>
      </S.NewBody>
    </>
  );
}
