import React from "react";
import { unmountComponentAtNode, waitForElement } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitFor } from '@testing-library/react';
import { EmployeeCards } from "./components/EmployeeCards";
import axios from "axios";
jest.mock('axios')

test("show loader when it's fetching data, then render employee", async () => {
    axios.get.mockResolvedValueOnce({
        ratings: [
            {
                id: 1,
                name: "Mike Meier",
                city: "Munich",
                gender: "Male",
                age: 27,
                department: "Planning"
            }
        ]
    })
});

const { getAllByTestId, getByText } = render(<EmployeeCards />);

