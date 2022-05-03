import React, { useState, useMemo, useContext } from "react";
import W12MTextBox from "./W12MTextBox";
import W12MSelectBox from "./W12MSelectBox";
import W12MTextAreaBox from "./W12MTextAreaBox";
import data from "../data/data.json";
import Misdeamnour, {
  PublicConfessionData,
  PublicConfessionDataUpdate,
} from "./W12MMisdeamForm";
import generateMisdemeanour, {
  MISDEMEANOURS,
  MisdemPropsTypes,
  choose,
  rand,
} from "../generate_misdemeanours";

const Confession: React.FC = () => {
  const othermisdemeanours = useContext(PublicConfessionData);
  const setOthermisdemeanours = useContext(PublicConfessionDataUpdate);
  const [textBox_subjectInfo, setTextBox_subjectInfo] = useState<string>("");
  const [selectBox_reasonOfContactInfo, setSelectBox_reasonOfContactInfo] =
    useState<string>("");
  const [
    textAreaBox_confessionDetailInfo,
    setTextAreaBox_confessionDetailInfo,
  ] = useState<string>("");
  const [dataOnSubmit, setDataOnSubmit] = useState<string>("");
  const [confessButtonEnabled, setConfessButtonEnabled] = useState(false);

  const textBox_subject = data.textBox_subject;
  const selectBox_reasonOfContact = data.selectBox_reasonOfContact;
  const textAreaBox_confessionDetail = data.textAreaBox_confessionDetail;

  const allTextBoxes = [textBox_subject];
  const allSelectBoxes = [selectBox_reasonOfContact];
  const allTextAreaBoxes = [textAreaBox_confessionDetail];

  const validate = (
    fieldPattern: string,
    value: string,
    min: number,
    max: number,
    optionIndex: number
  ): boolean => {
    let isPatternMatched = false;

    if (fieldPattern.length > 0) {
      const regEx = new RegExp(fieldPattern);
      isPatternMatched = regEx.test(value);
      if (!isPatternMatched) return true;
    }

    if (optionIndex !== -1) {
      if (optionIndex !== 0) return true;
    } else if (
      min !== -1 &&
      max !== -1 &&
      (value.length < min || value.length > max)
    )
      return true;

    return false;
  };

  const onChangeTextBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const minNumber = Number.parseInt(event.target.min);
    const maxNumber = Number.parseInt(event.target.max);
    allTextBoxes[0].displayError = validate(
      event.target.pattern,
      event.target.value,
      minNumber,
      maxNumber,
      -1
    );
    setTextBox_subjectInfo(event.target.value);
  };

  const onChangeSelectBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectBox_reasonOfContactInfo(
      event.target.options.selectedIndex + "," + event.target.value
    );
  };

  const onChangeTextAreaBox = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaBox_confessionDetailInfo(event.target.value);
    allTextAreaBoxes[0].displayError = validate(
      "",
      event.target.value,
      event.target.minLength,
      event.target.maxLength,
      -1
    );
    if (!allTextAreaBoxes[0].displayError) setConfessButtonEnabled(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let allValues = "";
    if (!allTextBoxes[0].displayError && !allTextAreaBoxes[0].displayError) {
      let meDemnourNumber = 0;
      meDemnourNumber = Number.parseInt(
        selectBox_reasonOfContactInfo.split(",")[0]
      );
      if (!meDemnourNumber) meDemnourNumber = 0;
      if (meDemnourNumber <= 3) {
        const misdemeanours = [];
        misdemeanours.push({
          citizenId: "000",
          misdemeanour: MISDEMEANOURS[meDemnourNumber],
          date: new Date().toLocaleDateString(),
          imagesrc: "https://picsum.photos/" + 50 + "/" + 50,
        });
        setOthermisdemeanours(misdemeanours);
      } else {
        allValues = textBox_subjectInfo
          .concat(",")
          .concat(selectBox_reasonOfContactInfo.split(",")[1])
          .concat(",")
          .concat(textAreaBox_confessionDetailInfo);
        setDataOnSubmit(allValues);
        console.log(allValues);
      }
    }
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="w12MConfessionForm"
      className="w12MConfessionForm"
    >
      {allTextBoxes.map((textbox) => (
        <W12MTextBox textboxObject={textbox} onChange={onChangeTextBox} />
      ))}
      {allSelectBoxes.map((selectbox) => (
        <W12MSelectBox
          selectboxObject={selectbox}
          onChange={onChangeSelectBox}
        />
      ))}
      {allTextAreaBoxes.map((textareabox) => (
        <W12MTextAreaBox
          textareaObject={textareabox}
          onChange={onChangeTextAreaBox}
        />
      ))}
      <input
        type="submit"
        data-testid="submit"
        value="Confess"
        className="btn btn-primary"
        disabled={!confessButtonEnabled}
      />
      <p data-testid="data-onsubmit">{dataOnSubmit}</p>
    </form>
  );
};

export default Confession;
