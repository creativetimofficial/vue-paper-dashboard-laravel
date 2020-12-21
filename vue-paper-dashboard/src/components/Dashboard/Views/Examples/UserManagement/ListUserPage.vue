<template>
  <div class="row">
    <div class="col-md-12 pro-feature alert alert-danger">
        <strong
          >Add, Edit, Delete features are not functional. This is a PRO feature!
          Click
          <a
            href="https://www.creative-tim.com/live/vue-paper-dashboard-pro-laravel"
            target="_blank"
            >here</a
          >
          to see the PRO product.</strong
        >
      </div>
    <div class="col-md-12 card mt-3">
      <div class="card-header">
        <div class="category">Users list</div>
        <div class="text-right mb-3">
          <p-button @click="onProFeature()" class="mt-3" type="primary">Add User</p-button>
        </div>
      </div>
      <div class="card-body row">
        <div class="col-sm-6">
          <el-select
            class="select-default"
            v-model="pagination.perPage"
            placeholder="Per page">
            <el-option
              class="select-default"
              v-for="item in pagination.perPageOptions"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="col-sm-6">
          <div class="pull-right">
            <fg-input class="input-sm"
                      placeholder="Search"
                      v-model="query"
                      addon-right-icon="nc-icon nc-zoom-split">
            </fg-input>
          </div>
        </div>
        <div class="col-sm-12 mt-2">
          <el-table class="table-striped" :data="users" border @sort-change="sortChange">
            <el-table-column label="Name" prop="name" sortable="custom" />
            <el-table-column label="Email" prop="email" sortable="custom" />
            <el-table-column
              label="Created At"
              prop="created_at"
              sortable="custom"
            />
            <el-table-column
              fixed="right"
              class-name="td-actions"
              label="Actions">
              <template slot-scope="props">
                <p-button type="success" size="sm" icon @click="onProFeature()">
                  <i class="fa fa-edit"></i>
                </p-button>
                <p-button type="danger" size="sm" icon @click="onProFeature()">
                  <i class="fa fa-times"></i>
                </p-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="col-sm-6 pagination-info">
          <p class="category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
        </div>
        <div class="col-sm-6">
          <p-pagination class="pull-right"
                        v-model="pagination.currentPage"
                        :per-page="pagination.perPage"
                        :total="total">
          </p-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash';
  import { Table, TableColumn, Select, Option } from 'element-ui';
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import swal from "sweetalert2";

  export default {
    components: {
      PPagination,
      [Select.name]: Select,
      [Option.name]: Option,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },

    data: () => ({
      users: [],
      footerTable: ["Name", "Created At", "Actions"],

      query: null,

      sort: "created_at",

      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
      },

      total: 0

    }),

    computed: {
    from() {
      return this.pagination.perPage * (this.pagination.currentPage - 1);
    },

    to() {
      let highBound = this.from + this.pagination.perPage;
      if (this.total < highBound) {
        highBound = this.total;
      }
      return highBound;
    },
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      this.users = [
        {
          name: "Admin",
          email: "admin@jsonapi.com",
          created_at: "2020-01-01",
        },
      ];
    },
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature.",
      });
    },
    sortChange({ prop, order }) {
      if (order === "descending") {
        this.sort = `-${prop}`;
      } else {
        this.sort = `${prop}`;
      }
      this.getList();
    },
  },
  }
</script>
