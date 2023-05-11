import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux'
import { getPages } from '../Redux/Action';
const Paginat = () => {


    const [pageCount, setpageCount] = useState(0)
    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pageCount);

    useEffect(() => {
        setpageCount(pages)
    }, [pages])


    const handlePageClick = (data) => {
        dispatch(getPages(data.selected + 1))
    }

    if (pageCount > 500) {
        setpageCount(500)
    }

    return (
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
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
    )
}

export default Paginat