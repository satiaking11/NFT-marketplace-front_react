import React from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './Filter.sass';

type Props = {
  onSubmit: Function;
};
function Filter({ onSubmit }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [nickname, setNickname] = React.useState('');
  const [min, setMin] = React.useState('');
  const [max, setMax] = React.useState('');

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = {
      nickname,
      min,
      max,
    };
    onSubmit(formData);
    setIsOpen(false);
  }

  function clearAll() {
    setNickname('');
    setMin('');
    setMax('');
  }
  return (
    <div className="filter-btn p-4 md:p-0 ">
      <Button
        className="md:mx-2 w-full md:w-auto justify-center"
        onClick={() => {
          setIsOpen(true);
          setIsComponentVisible(true);
        }}
      >
        <img src="/icons/filter.svg" alt="filter" />
        Filters
      </Button>
      {isOpen && (
        <div ref={ref}>
          {isComponentVisible && setIsOpen && (
            <div className="bottom-[65px]  md:bottom-[unset]  w-[95%] right-[8px] border dark:border-0 absolute md:right-1  md:w-[514px] bg-white dark:bg-black-800 dark:text-white rounded-3xl px-8 py-6 ">
              <div className="flex items-start justify-between mb-4">
                <p className="text-2xl font-bold">Filters</p>
                <button
                  type="button"
                  className="h-auto"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Icon name="x" className="stroke-current" />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <p className="label dark:text-gray-400">ARTIST NICKNAME</p>
                  <input
                    type="text"
                    id="nickname"
                    className="form-control dark:bg-[#2A2A32]"
                    placeholder="e.g 'Albert'"
                    value={nickname}
                    onChange={({ target }) => setNickname(target.value)}
                  />
                </div>
                <div className="form-group">
                  <p className="label dark:text-gray-400">NUMBER OF ITEMS</p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="min"
                      className="form-control max-w-[205px] dark:bg-[#2A2A32]"
                      placeholder="Min"
                      value={min}
                      onChange={({ target }) => setMin(target.value)}
                    />
                    <span className="px-4 text-gray-400 dark:text-light-gray">To</span>
                    <input
                      type="text"
                      id="max"
                      className="form-control max-w-[205px] dark:bg-[#2A2A32]"
                      placeholder="max"
                      value={max}
                      onChange={({ target }) => setMax(target.value)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <p className="label dark:text-gray-400">FLOOR PRICE (ADA)</p>
                  <input
                    type="text"
                    className="form-control max-w-[205px] dark:bg-[#2A2A32]"
                    placeholder="e.g 0.1"
                  />
                </div>
                <div className="flex justify-between">
                  <Button type="submit" className="text-white rounded-full px-8" color="primary">
                    Apply Filter
                  </Button>
                  <Button
                    onClick={() => clearAll()}
                    className="rounded-full px-8 border-none hover:bg-transparent hover:text-black-900"
                  >
                    Clear All
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Filter;
