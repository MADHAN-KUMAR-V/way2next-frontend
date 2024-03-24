
import ReactPaginate from 'react-paginate'
import './Pagination.css'


const Pagination = ({pages,setCurrPage,currPage}) => {
   

  const handlePageChange = (data)=>{
    setCurrPage(data.selected)
  }


  return (
    <>
    <div className='pagination_container'>
    <ReactPaginate 
    previousLabel={"<"}
    nextLabel={">"}
    breakLabel={"..."}
    pageCount={pages.totalPages}
    marginPagesDisplayed={3}
    onPageChange={handlePageChange}
    containerClassName={'pagination'}
    pageLinkClassName={'page-item'}
    pageClassName={'page-link'}
    previousClassName={'page-link'}
    nextClassName={'page-link'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    renderOnZeroPageCount={null}
    forcePage = {currPage}
    />
    </div>
    </>
  )
}

export default Pagination