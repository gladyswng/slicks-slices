import React from 'react';
// eslint-disable-next-line import/no-unresolved
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// eslint-disable-next-line react/prop-types
export default function PriceInput({ type, value, onChange, inputComponent }) {
  const formatMoney = Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: 'NOK',
  }).format;

  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}
