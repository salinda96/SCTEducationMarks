import styled from "styled-components";
import { DoubleArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./App.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTr = styled.tr`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  &:hover {
    color: #4ca1af;
    font-weight: 800;
    font-style: italic;
  }
`;

const StyledTr1 = styled.tr`
  background-color: #8c91f17d;
`;

const StyledTd = styled.td`
  text-align: left;
  background-color: #fff;
  cursor: pointer;
  margin: 4px 0;
  padding: 15px;
`;
const StyledTh = styled.th`
  text-align: left;
  padding: 15px;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: white;
  /* Color the border and text with theme.main */
  color: ${props => props.bg};
  border: 2px solid ${props => props.bg};
`;

const PaginationField = styled.div`
display: flex;
`;

const Table = ({ data }) => {

  const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();

  const marksPerPage = 8;
  const pagesVisited = pageNumber * marksPerPage;

  const pageCount = Math.ceil(data.length / marksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
    <StyledTable>
      <tbody>
        <StyledTr1>
          <StyledTh>Reg Number</StyledTh>
          <StyledTh>Name</StyledTh>
          <StyledTh>SLIN/NIC</StyledTh>
          <StyledTh>Center</StyledTh>
          <StyledTh>Category</StyledTh>
          <StyledTh>Final Marks</StyledTh>
          <StyledTh>Status</StyledTh>
          <StyledTh>View</StyledTh>
        </StyledTr1>
        {data.slice(pagesVisited, pagesVisited + marksPerPage).map((item) => (
          <StyledTr key={item._id}>
            <StyledTd>{item.userId}</StyledTd>
            <StyledTd>{item.username}</StyledTd>
            <StyledTd>{item.nic}</StyledTd>
            <StyledTd>{item.center}</StyledTd>
            <StyledTd>{item.course}</StyledTd>
            <StyledTd>{item.finalMarks}</StyledTd>
            <StyledTd>
              {item.finalMarks < 60 ? (
                <Button bg="palevioletred">Un-Eligible</Button>
              ) : (
                <Button bg="mediumseagreen">Eligible</Button>
              )}
            </StyledTd>
            <StyledTd>
              <Link to={`/ViewMark/${item._id}`}>
                <DoubleArrow />
              </Link>
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
    <PaginationField>
     <ReactPaginate
       previousLabel={"Previous"}
       nextLabel={"Next"}
       pageCount={pageCount}
       onPageChange={changePage}
       containerClassName={"paginationBttns"}
       previousLinkClassName={"previousBttn"}
       nextLinkClassName={"nextBttn"}
       disabledClassName={"paginationDisabled"}
       activeClassName={"paginationActive"}
     />
     </PaginationField>
     </>
  );
};

export default Table;
