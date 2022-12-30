import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Component } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const theme = useTheme();

  const InputProps: TextInputProps = {
    placeholderTextColor: theme.colors.gray_300,
    ...rest,
  };

  return <Component {...InputProps} />;
}
