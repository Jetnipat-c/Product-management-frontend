import React, { useState, useEffect } from "react";
import {StyleWrapper, Table_div} from "../../styles/components/styles-home";
import Layouts from "../../Layouts/Layouts";
import { Divider, Input, Table, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { service } from "../../service/index";
import withAuth from "../../hoc/withAuth";
//const { Search } = Input;

const Home = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchInput, setSearchInput] = useState();
  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      maximumSignificantDigits,
    }).format(number);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            setSearchInput(node);
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    // onFilterDropdownVisibleChange: (visible) => {
    //   if (visible) {
    //     setTimeout(() => searchInput.select(), 100);
    //   }
    // }

    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "รหัสสินค้า",
      dataIndex: "product_id",
      key: "product_id",
      // render: (text) => <a>{text}</a>,
      ...getColumnSearchProps("product_id"),
    },
    {
      title: "บริษัท",
      dataIndex: "company",
      key: "company",
      responsive: ["md"],
    },
    {
      title: "รหัสสินค้า",
      dataIndex: "receipt_code",
      key: "receipt_code",
      responsive: ["md"],
    },
    {
      title: "ขนาด",
      dataIndex: "product_size",
      key: "product_size",
      responsive: ["md"],
    },
    {
      title: "ความกว้าง",
      dataIndex: "product_width",
      key: "product_width",
      responsive: ["lg"],
    },
    {
      title: "สี",
      dataIndex: "product_color",
      key: "product_color",
      responsive: ["lg"],
    },
    {
      title: "วันที่นำเข้า",
      dataIndex: "createdAt",
      key: "createdAt",
      responsive: ["lg"],
      render: (text) => <label>{text.slice(0, 10)}</label>,
    },
    {
      title: "ราคาที่ซื้อ",
      dataIndex: "price",
      key: "price",
      responsive: ["lg"],
      render: (text) => <label>{formatDollar(text)}</label>,
    },
    {
      title: "อื่นๆ",
      dataIndex: "note",
      key: "note",
      responsive: ["lg"],
    },
  ];

  useEffect(async () => {
    let res = await service({
      url: `/product/stock`,
      methods: "get",
    });
    if (res && res.status === 200) {
      setData(res.data);
    } else {
    }
  }, []);

  return (
    <StyleWrapper>
      <Layouts>
        <Divider>
          <h1>คลังสินค้า</h1>
        </Divider>
        <Table_div>
          <div className="box-table">
            <div className="box-table-item">
              <Table columns={columns} dataSource={data} rowKey="product_id" />
            </div>
          </div>
        </Table_div>
      </Layouts>
    </StyleWrapper>
  );
};

//export default Home;
export default withAuth(Home);
