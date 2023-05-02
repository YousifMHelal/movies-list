import React from 'react'
import ReactPaginate from 'react-paginate'

const paginat = ({select, pages}) => {
    const handlePageClick = (data) => {
        select(data.selected + 1) 
    }
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pages}
                previousLabel="<<"
                containerClassName='pagination d-flex justify-content-center p-3'
                pageClassName='page-item'
                nextClassName='page-item'
                previousClassName='page-item'
                breakClassName='page-item'
                activeClassName='page-item active'
                disabledClassName='page-item'

                pageLinkClassName='page-link'
                nextLinkClassName='page-link'
                previousLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeLinkClassName='page-link active'
                disabledLinkClassName='page-link'
                />
        </div>
    )
}

export default paginat
