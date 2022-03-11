/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';

/** Helpers */

// helper to get an array containing the object values with
// the correct type infered.
function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

// Type guard for the primitive types which will support printing
// out of the box
function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value === 'string'
    || typeof value === 'number'
    || typeof value === 'boolean'
    || typeof value === 'symbol'
  );
}

/** Component */

interface MinTableItem {
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type CustomRenderers<T extends MinTableItem> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

interface TableProps<T extends MinTableItem> {
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
  withBorder?: boolean
}

export default function Table<T extends MinTableItem>({
  customRenderers, headers, items, withBorder,
}: TableProps<T>) {
  function renderRow(item: T) {
    return (
      <tr>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = customRenderers?.[itemProperty];

          if (customRenderer) {
            return <td className={withBorder ? 'border-t p-[15px]' : 'p-[15px]'}>{customRenderer(item)}</td>;
          }

          return (
            <td className={withBorder ? 'border-t p-[15px]' : 'p-[15px]'}>
              {isPrimitive(item[itemProperty]) ? item[itemProperty] : ''}
              {' '}
              {item[itemProperty]}
              {' '}
              1
            </td>
          );
        })}
      </tr>
    );
  }

  return (
    <table className="w-full text-left">
      <thead>
        {objectValues(headers).map((headerValue) => (
          <th className="text-light-gray-400 dark:text-light-gray text-[14px] uppercase font-normal p-[15px]">{headerValue}</th>
        ))}
      </thead>
      <tbody>{items.map(renderRow)}</tbody>
    </table>
  );
}
