/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

function Pagination({ setPageNumber, pageNumber , info }) {
  

  return (
    <>
      <ReactPaginate
        className="pagination justify-center gap-2 m-4"
        forcePage={pageNumber === 1?0: pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary"
        nextClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={(data) => setPageNumber(data.selected + 1)}
      />
    </>
  );
}
export default Pagination;
