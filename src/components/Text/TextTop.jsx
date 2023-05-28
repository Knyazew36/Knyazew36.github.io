import React from 'react';

const TextTop = () => {
  return (
    <div className='flex-col gap-2 pt-2 w-[60%] hidden print:flex'>
      <p className='text-bold text-end'>Приложение №2</p>
      <h6 className=''>
        к договору №______________ на оказание платных стоматологических услуг в
        ООО «ЕвроДентис»
      </h6>
    </div>
  );
};

export default TextTop;
