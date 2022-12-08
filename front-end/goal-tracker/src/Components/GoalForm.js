import React, { useState, useEffect } from "react";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Box from "@mui/joy/Box";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";

// For incompatibility workaround mentioned below.
import { deepmerge } from "@mui/utils";
import {
  Experimental_CssVarsProvider as CSSVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
} from "@mui/material/styles";

import {
  extendTheme as extendJoyTheme,
  shouldSkipGeneratingVar as joyShouldSkipGeneratingVar,
} from "@mui/joy/styles";

const joyTheme = extendJoyTheme({ cssVarPrefix: "mui" });
const muiTheme = extendMuiTheme();

const GoalForm = (params) => {
  return (
    <>
      <form className="" onSubmit={params.handleFormSubmit}>
        <label>Goal:</label>
        <input className="form-control" type="text" onChange={params.getGoal} />
        <input
          className="form-check-input mt-3 mb-3 me-2"
          type="checkbox"
          id="flexCheckDefault"
          onClick={params.getIsComplete}
        />

        <label
          className="form-check-label mt-3 mb-3"
          htmlFor="flexCheckDefault"
        >
          Did you complete this goal?
        </label>

        <select
          className="form-select"
          aria-label="Default select example"
          onChange={params.getTimeframe}
          name="dropdown"
        >
          <option>Goal Timeframe</option>
          <option name="dropdown" value="Daily">
            Daily
          </option>
          <option name="dropdown" value="Weekly">
            Weekly
          </option>
          <option name="dropdown" value="Monthly">
            Monthly
          </option>
          <option name="dropdown" value="Yearly">
            Yearly
          </option>
        </select>
        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default GoalForm;
