import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Component } from "./styles";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  const theme = useTheme();

  const InputProps = {
    ref: inputRef,
    placeholderTextColor: theme.colors.gray_300,
    ...rest,
  };

  return <Component {...InputProps} />;
}
