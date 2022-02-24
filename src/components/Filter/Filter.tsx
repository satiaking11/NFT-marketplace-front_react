import React, { Dispatch, SetStateAction } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Modal from '../Modal';
import './Filter.sass';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function FilterContent({
  setIsOpen,
}: Props) {
  return (
    <div className="max-w-[514px] w-full bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6">
      <div className="flex items-start justify-between mb-4">
        <p className="text-2xl font-bold">Filters</p>
        <button
          type="button"
          className="h-auto"
          onClick={() => { setIsOpen(false); }}
        >
          <Icon name="x" className="stroke-current" />
        </button>
      </div>
      <form>
        <div className="form-group">
          <p className="label dark:text-gray-400">ARTIST NICKNAME</p>
          <input type="text" className="form-control dark:bg-[#2A2A32]" placeholder="e.g 'Albert'" />
        </div>
        <div className="form-group">
          <p className="label dark:text-gray-400">NUMBER OF ITEMS</p>
          <div className="flex items-center">
            <input type="text" className="form-control max-w-[205px] dark:bg-[#2A2A32]" placeholder="Min" />
            <span className="px-4 text-gray-400 dark:text-light-gray">To</span>
            <input type="text" className="form-control max-w-[205px] dark:bg-[#2A2A32]" placeholder="max" />

          </div>
        </div>
        <div className="form-group">
          <p className="label dark:text-gray-400">FLOOR PRICE (ADA)</p>
          <input type="text" className="form-control max-w-[205px] dark:bg-[#2A2A32]" placeholder="e.g 0.1" />
        </div>
      </form>
      <div className="flex justify-between">
        <Button className="text-white rounded-full px-8" color="primary">Apply Filter</Button>
        <Button className="rounded-full px-8 border-none hover:bg-transparent hover:text-black-900">Clear All</Button>

      </div>
    </div>
  );
}

function Filter() {
  return (
    <Modal>
      {(setIsOpen) => ({
        content: <FilterContent setIsOpen={setIsOpen} />,
        button: (
          <Button className="mx-2" onClick={() => setIsOpen(true)}>
            <img src="/icons/filter.svg" alt="filter" />
            Filters
          </Button>
        ),
      })}
    </Modal>
  );
}

export default Filter;
