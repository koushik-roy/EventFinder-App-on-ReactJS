import React from "react";
import PropTypes from "prop-types";

const ItemEvents = ({ eve }) => {
  return (
    <div>
      <li>{eve.title}</li>
    </div>
  );
};

ItemEvents.propTypes = {
  eve: PropTypes.object.isRequired,
};

export default ItemEvents;
