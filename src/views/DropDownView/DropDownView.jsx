import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const DropDownView = React.memo(({ name, value, options = [], onChangeHandler }) => {
    return (
        <>
            <Select name={name} value={value} onChange={onChangeHandler}>
                {options.map((optionValue, index) => (
                    <option value={optionValue} key={`${name}-${index}`}>
                        {optionValue}
                    </option>
                ))}
            </Select>
        </>
    );
});

DropDownView.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    isValid: PropTypes.bool
};

const Select = styled.select`
    background-color: #20649b;
`;
