import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@mui/material'
import styled, { css } from 'styled-components'
import { getThemeData } from '../../services/utils'

export const RTFBottomNavigation = styled(BottomNavigation)`
  background: transparent;
  display: flex;
  height: 100%;
  color: ${(props) =>
    getThemeData(props.theme.colors, 'primaryText')} !important;
  > button {
    flex: 1;
    display: flex;
  }
`

export const RTFSquareActionButton = styled.button`
  background: ${(props) =>
    props.selected
      ? getThemeData(props.theme.colors, 'primaryText')
      : 'transparent'};
  color: ${(props) =>
    props.selected
      ? '#454545'
      : getThemeData(props.theme.colors, 'primaryText')};
  outline: none;
  height: 80px;
  width: 100%;
  border: thin solid ${({ theme }) => getThemeData(theme.colors, 'primaryText')};
  border-radius: 4px;
  cursor: pointer;
  > div:nth-child(1) {
    font-size: 1.2rem;
  }
  div {
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;
  }
  flex: 1;
  display: flex !important;
  transition: all 1sec;
  flex-direction: column;
  position: relative;
  display: block;
  margin: 0 2px;

  justify-content: center;
  align-items: center;

  padding: 10rem / @hfs 20rem / @hfs;
  text-transform: uppercase;
  overflow: hidden;
  :disabled {
    color: #787878;
    border-color: #787878;
    cursor: not-allowed;
  }
  &:before {
    box-sizing: border-box;
    transform: translateX(100%);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    border-radius: 4px;
  }

  &:after {
    box-sizing: border-box;
    transform: translateX(-100%);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 99.5%;
    height: 2px;
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-radius: 4px;
  }

  &:not([disabled]):hover {
    color: ${(props) =>
      props.selected
        ? '#454545'
        : getThemeData(props.theme.colors, 'primaryText')};
    text-decoration: none;
    backdrop-filter: blur(
      ${({ theme }) => getThemeData(theme.colors, 'card.blur') || '0px'}
    );
    &:before {
      transition: 0.1s transform linear, 0.1s height linear 0.1s;
      transform: translateX(0);
      height: 100%;
      border-color: ${(props) =>
        getThemeData(props.theme.colors, 'primaryText')};
      border-radius: 4px;
    }
    &:after {
      transition: 0.1s transform linear 0.2s, 0.1s height linear 0.3s;
      transform: translateX(0);
      height: 100%;
      border-color: ${(props) =>
        getThemeData(props.theme.colors, 'primaryText')};
      border-radius: 4px;
    }
  }
`

export const RTFAccordion = styled(Accordion)`
  height: ${(props) => (props.expanded ? '100%' : 'auto')};
  background: transparent !important;
  color: ${(props) =>
    getThemeData(props.theme.colors, 'primaryText')} !important;
`

export const RTFAccordionSummary = styled(AccordionSummary)`
  /* height: 30px; */
  /* min-height: unset; */
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: unset !important;
  }
  color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
  .MuiAccordionSummary-expandIconWrapper {
    color: ${(props) =>
      getThemeData(props.theme.colors, 'primaryText')} !important;
  }
`

export const RTFAccordionDetails = styled(AccordionDetails)`
  padding: 0px !important;
`

export const RTFToolButton = styled(Button)`
  border-radius: 0px 0px 0px 0px;
  background: transparent;
  border: 1px solid
    ${(props) => getThemeData(props.theme.colors, 'primaryButton')} !important;
  color: ${(props) =>
    getThemeData(props.theme.colors, 'primaryButtonText')} !important;
  width: 10px;
  transition: width 0.5s ease-out;
  svg {
    margin-right: 8px;
  }
  &:first-child {
    border-top-left-radius: ${(props) =>
      props.anchor === 'bottom' ? '8px' : '0px'};
    border-bottom-left-radius: ${(props) =>
      props.anchor === 'bottom' ? '0px' : '8px'};
  }

  &:last-child {
    border-top-right-radius: ${(props) =>
      props.anchor === 'bottom' ? '8px' : '0px'};
    border-bottom-right-radius: ${(props) =>
      props.anchor === 'bottom' ? '0px' : '8px'};
  }

  &:disabled {
    background: #787878 !important;
  }

  &:hover {
    background: ${(props) =>
      getThemeData(props.theme.colors, 'primaryButton')} !important;
  }
`

export const RTFSelect = styled(Select)`
  margin: 8px;
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }

  .MuiInput-underline:before {
    border-color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }

  .MuiInputLabel-animated {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }
  .MuiInputBase-input {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.placeholder')} !important;
  }

  .MuiInputLabel-outlined {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.placeholder')} !important;
  }

  .MuiPaper-elevation {
    background: ${(props) =>
      getThemeData(props.theme.colors, 'background')} !important;
    background-image: url(${(props) => props.background}) !important;
    opacity: 1;
  }
`

export const RTFLabelField = styled.div`
  margin: 8px;
  color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
`

export const RTFListItem = styled(ListItem)`
  height: 30px;
  width: 100%;
  border-left: 2px solid transparent;
  color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
  .MuiListItemIcon-root {
    color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
  }
  :hover {
    border-color: ${(props) => getThemeData(props.theme.colors, 'border')};
  }
`

export const RTFListIcon = styled(ListItemIcon)`
  min-width: unset !important;
  .MuiListItemIcon-root {
    min-width: unset !important;
  }
  margin-right: 16px;
  font-size: 12px !important;
`
export const RTFHoverButton = styled.button`
  margin-right: 16px !important;
  height: 40px;
  width: 40px;
  border-radius: 50% !important;
  border: 1px solid #454545 !important;
  min-width: unset !important;
  cursor: pointer !important;
  &:hover {
    background-color: #787878 !important;
    color: #fff !important;
    transition: all 500ms !important;
    border: 1px solid #343434 !important;
  }

  /* margin: 40px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  width: 30px;
  height: 30px;
  border-radius: 50%; */
  /* text-transform: uppercase;
  font-size: 15px;
  line-height: 1.3;
  cursor: pointer;
  transition: all 500ms;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 50%, black 50%, black 100%);
  background-repeat: no-repeat;
  background-position: 0 0 ;
  background-size: 90px 180px;

  &:hover {
    color: white;
    background-position: 0 -90px ;
  } */
`

/* Grid */
export const RTFGridRow = styled.div`
  /* border-bottom: 1px solid; */
  /* border-color: ${({ theme }) =>
    getThemeData(theme.colors, 'input.border')} !important; */
  padding: 0;
  display: flex;
  height: 50px;
`

export const RTFGridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2px 4px;
`

export const RTFGridActionCell = styled(RTFGridCell)`
  flex: 0;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 8px;
  align-items: center;
  div {
  }
`

export const RTFFormControlLabel = styled(FormControlLabel)`
  flex: 1;
  height: 100%;
  color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
`

export const RTFFormControl = styled(FormControl)`
  width: -webkit-fill-available;
  border-radius: 5px;
  padding: 8px !important;
  border: 1px solid !important;
  border-color: ${({ theme }) =>
    getThemeData(theme.colors, 'input.border')} !important;
  padding: 0px 8px 2px 8px !important;
  top: -5px !important;
`

export const RTFFormLabel = styled(FormLabel)`
  text-align: initial;
  color: ${(props) =>
    getThemeData(props.theme.colors, 'primaryText')} !important;
  padding: 0px 4px !important;
  font-size: 0.75em !important;
`

export const RTFCheckbox = styled.div`
  display: block;
  margin-bottom: 15px;

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }
  label {
    position: relative;
    color: ${({ theme }) => getThemeData(theme.colors, 'primaryText')};
    cursor: pointer;
  }

  label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid
      ${({ theme }) => getThemeData(theme.colors, 'input.border')};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid ${({ theme }) => getThemeData(theme.colors, 'input.border')};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`
export const RTFRadio = styled(Radio)`
  color: ${({ theme }) =>
    getThemeData(theme.colors, 'input.border')} !important;
  .MuiIconButton-label {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.color')} !important;
  }
  .PrivateSwitchBase-input {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }
  .MuiTouchRipple-root {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }
`

export const RTFRadioGroup = styled(RadioGroup)`
  flex-direction: 'column' !important;

  /* height: ${(props) => (props.multiline ? '40px' : 'unset')}; */
`

export const RTFTextField = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
    border-color: ${(props) => props.error && 'red'} !important;
  }

  .MuiInput-underline:before {
    border-color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
    border-color: ${(props) => props.error && 'red'} !important;
  }

  .MuiInputLabel-animated {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.border')} !important;
  }
  .MuiInputBase-input {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.color')} !important;
  }

  .MuiInputLabel-outlined {
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'input.color')} !important;
  }
  input {
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
      filter: invert(1);
    }
    /* 
    ::-webkit-datetime-edit {
      padding: 4 em;
    }
    ::-webkit-datetime-edit-fields-wrapper {
      background: blue;
    }
    ::-webkit-datetime-edit-text {
      padding: 0 0.5em;
    }

    ::-webkit-datetime-edit-month-field {
      color: white;
    }
    ::-webkit-datetime-edit-day-field {
      color: red;
    }
    ::-webkit-datetime-edit-year-field {
      color: red;
    }
    ::-webkit-calendar-picker-indicator {
      background: gray;
    } */
  }
`

export const RTFColorField = styled(TextField)`
  width: 200px !important;
  padding: 0px !important;
  height: 40px !important;
  label {
    display: none !important;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent !important;
    border-color: transparent !important;
  }

  .MuiInput-underline:before {
    border-color: transparent !important;
    border-color: transparent !important;
  }

  .MuiInputLabel-animated {
    color: transparent !important;
  }
  .MuiInputBase-input {
    color: transparent !important;
  }

  .MuiInputLabel-outlined {
    color: transparent !important;
  }
  input {
    padding: 0px !important;
    height: 40px !important;
    width: 150px !important;
  }
`
export const RTFMenu = styled(Menu)`
  background: transparent !important;
  box-sizing: border-box !important;
  .MuiMenu-list {
    background-image: linear-gradient(
      ${(props) => getThemeData(props.theme.colors, 'card.start')},
      ${(props) => getThemeData(props.theme.colors, 'card.end')}
    ) !important;
  }
  backdrop-filter: blur(
    ${({ theme }) => getThemeData(theme.colors, 'card.blur') || '0px'}
  );
`
export const RTFMenuItem = styled(MenuItem)`
  .MuiMenuItem-root {
    background: ${(props) =>
      props.theme.colors[
        props.elevation ? `background${props.elevation}` : `background1`
      ]} !important;
  }
  .MuiListItemText-root {
    color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
  }
  .MuiListItemIcon-root {
    color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
  }
`
export const RTFInputLabel = styled(InputLabel)``

export const RTFTitleField = styled(RTFLabelField)`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  mix-blend-mode: exclusion;
`

export const RTFHeaderField = styled(RTFLabelField)`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    getThemeData(props.theme.colors, 'primaryText')} !important;
`

export const RTFListItemText = styled(ListItemText)`
  font-size: 12px !important;
`

/* Grid */
export const RTFFieldSet = styled.fieldset`
  border: none;
  width: 100%;
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid;
    `}
  border-color: ${({ theme }) =>
    getThemeData(theme.colors, 'input.border')} !important;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  border-radius: 4px;
  margin-inline-start: 0px;
  width: 100%;
  margin: 0px !important;
  margin-inline-end: 0px;
  min-inline-size: 0px;
  padding-block-start: 0px;
  padding-block-end: 0px;
  padding-inline: 0px;
  legend {
    padding: 0px 4px;
    margin-left: 10px;
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'ternaryText')} !important;
  }
`

export const RTFGridHeaderRow = styled(RTFGridRow)`
  border-bottom: 2px solid;
  height: 30px;
  color: ${(props) => getThemeData(props.theme.colors, 'primaryText')};
`

export const RTFFileUpload = styled.fieldset`
  display: block;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 50px;
  color: white;
  border: 1px solid ${({ theme }) => getThemeData(theme.colors, 'input.border')} !important;
  border-radius: 4px;
  padding: 8px;
  .preview {
    display: flex;
    justify-content: center;
    align-items: 'center';
  }
  .action {
    display: flex;
    div {
      flex: 1;
    }
    .action-button {
      width: 100%;
      height: 100%;
      font-size: 15px;
      display: block;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) =>
        getThemeData(theme.colors, 'input.color')} !important;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s ease-out;
    }
  }

  .file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
  }
  .file-input {
    height: 100%;
  }

  .file-name {
    position: absolute;
    bottom: -35px;
    left: 10px;
    font-size: 0.85rem;
    color: #555;
  }

  input:hover + label,
  input:focus + label {
    transform: scale(1.02);
  }

  /* Adding an outline to the label on focus */
  input:focus + label {
    outline: 1px solid #000;
    outline: -webkit-focus-ring-color auto 2px;
  }
`

export const RTFImageUpload = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => getThemeData(theme.colors, 'input.border')} !important;
  border-radius: 4px;
  legend {
    padding: 0px 4px;
    margin-left: 5px;
    color: ${({ theme }) =>
      getThemeData(theme.colors, 'ternaryText')} !important;
  }
  .image-wrapper {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    border: 1px solid
      ${({ theme }) => getThemeData(theme.colors, 'input.border')} !important;
    border-radius: 4px;
    margin: 1rem;
    button {
      position: absolute;
      height: 20px;
      width: 20px;
      min-height: unset;
    }
    .image-container {
      flex: 1;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .footer {
      height: 30px;
      display: flex;
      background: ${({ theme }) =>
        getThemeData(theme.colors, 'background3')} !important;

      div {
        flex: 1;
        text-align: center;
        color: ${({ theme }) =>
          getThemeData(theme.colors, 'listPrimary')} !important;
      }
    }
  }
  .upload-file {
    display: block;
    border: none;
    outline: none;
    background: transparent;
    width: 100px;
    height: 100px;
    color: white;

    padding: 8px;
    .action {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        flex: 1;
      }
      .action-button {
        width: 100px;
        height: 100px;
        border: 1px solid
          ${({ theme }) => getThemeData(theme.colors, 'input.border')} !important;
        border-radius: 4px;
        font-size: 15px;
        display: block;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) =>
          getThemeData(theme.colors, 'input.color')} !important;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s ease-out;
      }
    }

    .file {
      opacity: 0;
      width: 0.1px;
      height: 0.1px;
      position: absolute;
    }
    .file-input {
      height: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .file-name {
      position: absolute;
      bottom: -35px;
      left: 10px;
      font-size: 0.85rem;
      color: #555;
    }

    input:hover + label,
    input:focus + label {
      transform: scale(1.02);
    }

    /* Adding an outline to the label on focus */
    input:focus + label {
      outline: 1px solid #000;
      outline: -webkit-focus-ring-color auto 2px;
    }
  }
`
