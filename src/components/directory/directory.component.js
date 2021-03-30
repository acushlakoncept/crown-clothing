import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect';
import { selectDirtorySection } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";
import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirtorySection
})

export default connect(mapStateToProps)(Directory);
