import React from 'react';

const TextTop = () => {
  return (
    <div className='flex-col gap-2 pt-2 print:flex w-[60%] hidden print:flex'>
      <p className='text-bold text-end'>Приложение №2</p>
      <p className=''>
        к договору №______________ на оказание платных стоматологических услуг в
        ООО «ЕвроДентис»
      </p>
    </div>
  );
};

export default TextTop;
