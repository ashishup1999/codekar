import {
  ErrorText,
  InputField,
  InputFieldWrapper,
  InputWrapper,
  LabelText,
} from "./Auth.styles";

export const TextInput = ({
  label,
  type,
  suffix,
  value,
  err,
  onChange,
}: {
  label: string;
  type: string;
  suffix: any;
  value: string;
  err: string;
  onChange: Function;
}) => {
  return (
    <InputWrapper>
      <LabelText>{label}</LabelText>
      <InputFieldWrapper>
        <InputField
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
        />
        {suffix}
      </InputFieldWrapper>
      {err && <ErrorText>{err}</ErrorText>}
    </InputWrapper>
  );
};
