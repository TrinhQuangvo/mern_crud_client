import { Button, Typography } from "@material-ui/core";
import React from "react";

import useStyle from "./styles";

const Pagination = ({ currentPage, totalPage }) => {
  const classes = useStyle();

  const directPage = () => {};

  return (
    <div className={classes.wrap}>
      <Button disabled={currentPage === 1 ? true : false} onClick={directPage}>
        Previous
      </Button>
      <Typography variant="h5" className={classes.PaginationType}>
        {currentPage} of {totalPage}
      </Typography>
      <Button
        disabled={currentPage === totalPage ? true : false}
        onClick={directPage}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
