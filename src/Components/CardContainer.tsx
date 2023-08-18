const CardContainer = (props: Data) => {
  const { id, name, description, link, sourceSVG, type } = props
  return (
    <>
      <article id={`Card ${id}`} className='rounded-[6px] shadow-md flex flex-col relative box-content w-[90%] h-[200px] bg-blue-400'>
        <a href={`${link}`} target={`_blank`} rel={`noopener noreferrer`} className='h-[100%] flex flex-col'>
          <sourceSVG/>
          <div className='flex flex-col py-[12px] px-[16px] grow card-body bg-yellow-400'>
              <h2 className='text-[17px] leading-[24px] font-[600] line-clamp-3 card-title'>
                {name}
              </h2>
              <p className='text-[14px] line-clamp-3 leading-[20px] hover:text-indigo-700 transition-all ease-in-out duration-300'>
                {description}
              </p>
          </div>
        </a>
      </article>
    </>
  )
}
export default CardContainer