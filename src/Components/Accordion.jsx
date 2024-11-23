

const Accordion = ({d,moreInfo,setMoreInfo}) => {
 const {id,title,info} = d;
 let isOpen = id== moreInfo

 const handleClick = ()=>{
setMoreInfo(isOpen ? null : id )
 }
  return (
    <div className="border rounded-md  pl-4 mb-4 bg-white lg:w-96 ">
      <header className="flex items-center justify-between pb-2 pt-2">
        <h2>{title}</h2>
        <button className="mr-6" onClick={handleClick}>
          {isOpen ? (
            <img src="/images/minus.svg" />
          ) : (
            <img src="/images/plus.svg" alt="" />
          )}
        </button>
      </header>

      {isOpen && (
        <>
          <div className="border-b"></div>
          <p className="text-sm mt-3  pr-10 text-wrap font-normal pb-3">
            {info}
          </p>
        </>
      )}
    </div>
  )
}

export default Accordion


