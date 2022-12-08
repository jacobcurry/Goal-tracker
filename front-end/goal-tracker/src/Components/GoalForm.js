import React, {useState, useEffect} from 'react'
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox'
import Box from '@mui/joy/Box'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';

// For incompatibility workaround mentioned below.
import {deepmerge} from "@mui/utils"
import { Experimental_CssVarsProvider as CSSVarsProvider,
  experimental_extendTheme as extendMuiTheme,
  shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
 } from '@mui/material/styles';

import {extendTheme as extendJoyTheme, shouldSkipGeneratingVar as joyShouldSkipGeneratingVar} from "@mui/joy/styles"

const joyTheme = extendJoyTheme({cssVarPrefix: 'mui'})
const muiTheme = extendMuiTheme()


const GoalForm = (params) => {
    return (
        <>
                <form onSubmit={params.handleFormSubmit}>
        <TextField
            label="Goal"
            placeholder="Goal"
            error
            helperText="Goal required."
            onChange={params.getGoal}
        />
        <Box>
      <Checkbox label="Goal Completed" />
        </Box>

        
        <Select
      placeholder="Goal Timeframe"
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="daily">Daily</Option>
      <Option value="weekly">Weekly</Option>
      <Option value="monthly">Monthly</Option>
      <Option value="yearly">Yearly</Option>
    </Select>

                <CSSVarsProvider
                    theme={deepmerge(joyTheme, muiTheme)}
                    shouldSkipGeneratingVar={keys => muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)}>
                <Button type="submit"
                >Create Goal</Button>
                </CSSVarsProvider>
                </form>
            </>

    )
}

export default GoalForm