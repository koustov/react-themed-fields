import styled, { css } from 'styled-components'

import { Tabs, Tab, Paper, Modal, Grid, Drawer } from '@mui/material'
import { getThemeData } from '../../services/utils'

const BoxSelected = css`
  border-color: #3f51b5;
`

export const FPPlannerWrapper = styled(Grid)``
export const RTFPaper = styled(Paper)`
  background: transparent !important;
  height: 100% !important;
  box-sizing: border-box !important;
  background: ${(props) =>
    props.theme.colors[
      props.elevation ? `background${props.elevation}` : `background1`
    ]} !important;
  padding: 8px;
  backdrop-filter: blur(
    ${({ theme }) => getThemeData(theme, 'colors.card.blur') || '0px'}
  );
`

export const RTFTabWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const RTFTabPanel = styled.div`
  flex: 1;
  padding: '8px';
  height: 100%;
  > .MuiBox-root {
    height: 100%;
  }
`

export const RTFTabs = styled(Tabs)`
  display: flex;
  color: ${({ theme }) => getThemeData(theme, 'colors.ternaryText')} !important;
  .MuiTab-textColorPrimary {
    color: ${({ theme }) =>
      getThemeData(theme, 'colors.ternaryText')} !important;
  }
`

export const RTFTab = styled(Tab)`
  display: flex;
  border-color: red;
`

export const RTFPlannerWrapper = styled(Grid)`
  overflow: hidden;
  height: 100%;
  padding: 4px;
  background: ${(props) =>
    getThemeData(props.theme, 'colors.background')} !important;
`
export const RTFSideBarWrapper = styled(Grid)`
  display: block;
  @media (max-width: 900px) {
    display: none;
  }
`

export const RTFSideBarSmall = styled(Grid)`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`
export const RTFPlanner = styled(RTFPaper)`
  padding: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  height: inherit;
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}
  ) !important;

  backdrop-filter: blur(
    ${({ theme }) => getThemeData(theme, 'colors.card.blur') || '0px'}
  );
  > * {
    margin: 8px;
  }

  .fp-main-area {
    flex: 1;
    display: flex;
    padding: 8px;
    overflow: hidden;
    > div {
      /* display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px; */
      flex: 1;
      padding: 8px;
      overflow: auto;
      border: 1px solid #787878;
    }
  }
`
export const RTFPreviewBox = styled.div`
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #787878;
  background: ${(props) => getThemeData(props.theme, 'colors.modal.bg')};
`

export const RTFEModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RTFModalLarge = styled.div`
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}
  ) !important;
  height: 90vh;
  width: 90vw;
`

export const RTFPaperVerticalPadding = styled(RTFPaper)`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}
  ) !important;
  > div {
    padding: 8px;
  }
`

export const RTFPaperPadding = styled(RTFPaper)`
  > div {
    padding: 8px;
  }
`

export const SmallHeader = styled.div`
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${(props) => getThemeData(props.theme, 'colors.secondaryText')};
`

export const RTFMediumHeader = styled(SmallHeader)`
  font-size: 16px;
  color: ${(props) => getThemeData(props.theme, 'colors.primaryText')};
`
export const RTFHeaderBar = styled.div`
  height: 20px;
  font-size: 12px;
  display: flex;
  margin: 8px;
  .header-title {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .header-tool-bar {
    display: flex;
    align-items: center;
    > * {
      margin: 8px;
    }
  }
`

export const RTFMediumHeaderBar = styled(RTFHeaderBar)`
  height: 40px;
  border-bottom: 1px solid
    ${(props) => getThemeData(props.theme, 'colors.secondaryText')};
`

export const RTFFiedlSet = styled.fieldset`
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: ${(props) => getThemeData(props.theme, 'colors.border')};
  height: 100%;
  > legend {
    padding: 0rem 1rem;
    color: ${(props) => getThemeData(props.theme, 'colors.primaryText')};
    span {
      margin-left: 0.5rem;
    }
  }
`

export const RTFInputFiedlSet = styled(RTFFiedlSet)`
  border-color: ${(props) => getThemeData(props.theme, 'colors.input.border')};
  > legend {
    color: ${({ theme }) =>
      getThemeData(theme, 'colors.ternaryText')} !important;
  }
`

export const RTFControlEdit = styled.div`
  /* position: relative;
  overflow: hidden;
  min-height: 50px;
  border-radius: 4px;
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  flex: 0;

  cursor: pointer;
  ${(props) => props.selected && BoxSelected}
  &:hover {
    .control-editor-main {
      -webkit-filter: blur(2px);
      filter: blur(2px);
      transition: all 0.7s;
    }
  }
  .content-overlay {
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    height: 99%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    z-index: 998;
  }

  &:hover .content-overlay {
    opacity: 1;
  }

  .content-details {
    position: absolute;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    top: 80%;
    z-index: 999;
    > * {
      margin: 8px;
    }
  }

  &:hover .content-details {
    top: 50%;
    left: 50%;
    opacity: 1;
  } */
`

export const RTFFormRow = styled.div`
  border-right: 4px solid transparent;
  width: 99%;
  border: 1px solid transparent;
  ${(props) => props.selected && BoxSelected}

  .control-edit-overlay {
    height: ${(props) => (props.editable ? '20px' : '0px')};
  }
  .action-button-wrapper {
    display: none;
  }
  /* .element-wrapper {
    border: 1px solid transparent;
  } */
  &:hover {
    .action-button-wrapper {
      display: ${(props) => (props.editable ? 'flex' : 'none')};
    }
    .element-wrapper {
      border-radius: 4px;
      border: 1px solid
        ${(props) =>
          props.editable && !props.bordered
            ? props.theme.colors.primaryText
            : 'transparent'};
    }
  }
`

export const RTFFormColumn = styled.div`
  border: 1px solid transparent;
  border: 1px solid
    ${(props) =>
      props.editable && props.selected
        ? getThemeData(props.theme, 'colors.primaryText')
        : 'transparent'};
  &:hover {
    border-radius: 4px;
    border: 1px solid
      ${(props) =>
        props.editable && !props.bordered
          ? getThemeData(props.theme, 'colors.primaryText')
          : 'transparent'};
  }
`

export const RTFNoContentAvailable = styled.div`
  height: 300px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted ${(props) => getThemeData(props.theme, 'colors.border')};
  border-radius: 4px;
  color: ${({ theme }) => getThemeData(theme, 'colors.secondaryText')};
  width: 100%;
  > div {
    margin-right: 8px;
    color: ${({ theme }) => getThemeData(theme, 'colors.secondaryText')};
    letter-spacing: 4px;
    font-size: 10px;
  }
`

export const RTRTFaper = styled(Paper)`
  background: ${(props) =>
    props.theme.colors[
      props.elevation ? `background${props.elevation}` : `background1`
    ]} !important;
  padding: 8px;
`

export const RTFEditorPaper = styled(RTRTFaper)`
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}}
  ) !important;
`

export const RTRTFlannerWrapper = styled(Grid)`
  height: 100%;
  padding: 4px;
  grid-row-gap: 20px !important;
  background: ${(props) => props.theme.colors.background};
`

export const RTFSideBar = styled(RTRTFaper)`
  height: 100%;
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}
  ) !important;
  .fp-side-bar {
    height: 100%;
    display: flex;
    flex-direction: column;
    > * {
      width: 100% !important;
    }
    &-header {
      width: 100%;
    }
    &-body {
      width: 100%;
      flex: 1;
      width: 15%;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
    &-footer {
      height: 100px;
      width: 100%;
      padding: 1rem;
    }
  }
`

export const RTRTFlanner = styled(RTRTFaper)`
  height: 100%;
  padding: 4px;
  background-image: linear-gradient(
    ${(props) => getThemeData(props.theme, 'colors.card.start')},
    ${(props) => getThemeData(props.theme, 'colors.card.end')}
  );
  > * {
    margin: 8px;
  }

  .fp-main-area {
    flex: 1;
    display: flex;
    padding: 8px;
    overflow: hidden;
    > div {
      /* display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px; */
      flex: 1;
      padding: 8px;
      overflow: auto;
      border: 1px solid #787878;
    }
  }
`
export const RTRTFreviewBox = styled.div`
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #787878;
`

export const RTFControlEditBox = styled.div`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  border-color: ${(props) => getThemeData(props.theme, 'colors.border')};
`

export const RTRTFaperVerticalPadding = styled(RTRTFaper)`
  display: flex;
  flex-direction: column;
  > div {
    padding: 8px;
  }
`

export const RTRTFaperPadding = styled(RTRTFaper)`
  > div {
    padding: 8px;
  }
`

export const RTFEditorModal = styled(RTRTFaper)`
  display: flex;
  margin: 8px;
  flex-direction: column;
  height: 100%;
`

export const RTFDividerField = styled.hr`
  margin: 25px auto 30px;
  padding: 0;
  border: 0;
  border-top: solid 3px;
  text-align: center;
  border-color: ${(props) => getThemeData(props.theme, 'colors.border')};

  &:after {
    content: '\f0e7';
    display: inline-block;
    position: relative;
    top: -1.7rem;
    padding: 0 1rem;
    font-family: FontAwesome;
    font-size: 3rem;
    background-color: #fff;
  }
`
export const RTFFormContainer = styled.div`
  padding: 1rem;
`
export const RTFFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => getThemeData(props.theme, 'colors.background')};
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`
export const RTFFormCell = styled.div`
  padding: 4px;
  margin: 4px;
  border-right: 4px solid transparent;
  display: inline-flex;
  width: 95%;
  ${(props) => props.selected && BoxSelected}
`

export const RTFFormBannerDefault = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-repeat: no-repeat;
  background-size: cover;
  background: ${(props) =>
    props.bg
      ? props.bg
      : props.theme.colors[
          props.elevation ? `background${props.elevation}` : `background1`
        ]} !important;
`

export const RTFFormBanner = styled(RTFFormBannerDefault)`
  height: 80px;
`

export const RTFBannerImage = styled(RTFFormBanner)`
  background-image: url(${(props) => props.background}) !important;
  background-size: contain;
`

export const RTFImageContainer = styled.div`
  display: flex;
  align-items: contain;
`

export const RTFDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 600px !important;
    background: none !important;
    background-image: linear-gradient(
      ${(props) => getThemeData(props.theme, 'colors.card.start')},
      ${(props) => getThemeData(props.theme, 'colors.card.end')}
    ) !important;
    backdrop-filter: blur(
      ${({ theme }) => getThemeData(theme, 'colors.card.blur') || '0px'}
    );
  }
`
