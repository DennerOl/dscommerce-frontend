export default function FormTextArea(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...textareaProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <textarea
      {...textareaProps}
      data-invalid={invalid}
      onBlur={handleBlur}
      data-dirty={dirty}
    />
  );
}
