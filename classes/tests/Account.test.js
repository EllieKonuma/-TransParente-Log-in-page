const { expect, test, beforeEach } = require("@jest/globals");
const Account = require("../Account.js");

const yukaAcc = null;
beforeEach(() => {
  yukaAcc = new Account("Yuka", "ellie@gmail.com", "123", false, 1, null);
});

describe("Testing when create Account", () => {
  beforeEach(() => {
    acc = new Account("Yuka", "ellie@gmail.com", "123", false, 1, null);
  });
  it("Should return true and verify getters", () => {
    expect(acc instanceof Account).toBeTruthy();
    expect(acc.name).toEqual("Yuka");
    expect(acc.email).toEqual("ellie@gmail.com");
    expect(acc.password).toEqual("123");
    expect(acc.author).toEqual(false);
    expect(acc.id).toEqual(1);
    expect(acc.authorId).toEqual(null);
  });
});

describe("Testing method becomeAuthor", () => {
  const placeHolder = {
    name: "Yuka",
    email: "ellie@gmail.com",
    password: "123",
    author: false,
    id: 1,
    authorId: null,
  };
  beforeEach(() => {
    yukaAcc = new Account(placeHolder);
    yukaAccNull = yukaAcc.becomeAuthor(null);
    yukaAccNo = yukaAcc.becomeAuthor("no");
    yukaAccOther = yukaAcc.becomeAuthor("blablabla!");
    yukaAccYes = yukaAcc.becomeAuthor("yes"); //maybe this will not work
  });

  it("Should throw Error", () => {
    expect(() => yukaAccNull).toThrow(
      Error("Could not create author for account, try again later.")
    );
  });
  it("Should return a message", () => {
    expect(yukaAccNO).toBe("Not a problem you still just a User.");
  });
  it("Should throw Error", () => {
    expect(() => yukaAccOther).toThrow(
      Error("Response not apropiate is just Yes or No.")
    );
  });
  it("Should return a message", () => {
    expect(yukaAccYes).toBe("Now you are an Author!");
  });
});

describe("Testing method verifyPassword", () => {
  beforeEach(() => {
    yukaAccTrue = yukaAcc.verifyPassword("123");
    yukaAccFalse = yukaAcc.verifyPassword("1234");
  });

  it("Should throw Error", () => {
    expect(() => yukaAccFalse).toThrow(Error("Password Invalid!"));
  });
  it("Should return true", () => {
    expect(yukaAccTrue).toHaveReturned();
  });
});

describe("Testing method Hey", () => {
  beforeEach(() => {
    yukaAccHey = yukaAcc.hey();
  });

  it("Should throw Error", () => {
    expect(() => yukaAccHey).toBe(`Hey, Yuka!!!`);
  });
});
