export default function Signup() {
  return (
    <Container>
      <InputGroup>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          placeholder=""
          value={email}  
          onChange={onEmailDate} 
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          id="nickname"
          placeholder=""
          value={nickname}
          onChange={onChangeNickname}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="number"
          id="password"
          placeholder=""
          value={amount}
          onChange={onChangeAmount}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="passwordConfirm">비밀번호 확인인</label>
        <input
          type="text"
          id="description"
          placeholder=""
          value={description}
          onChange={onChangeDescription}
        />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onEdit}>수정</Button>
        <Button onClick={onDelete} danger="true">
          삭제
        </Button>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
}
