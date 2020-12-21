# Tables

All Boostrap classes for tables are supported and improved.
Besides the simple and striped tables, we added tables that have actions and tables with switches.
We also combine [Element-UI tables](http://element.eleme.io/#/en-US/component/table) to achieve highly customizable tables that can suit any needs.
You can see some code samples below:

<hr>
To use the table component, import it

```js
import {Table, TableColumn} from 'element-ui'
```

Global usage

```js
Vue.use(Table)
Vue.use(TableColumn)
```

For local usage
```js
export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  }
}
```

### Table with actions

:::demo
```html
<template>
<el-table :data="tableData">
  <el-table-column min-width="50" type="index"></el-table-column>
  <el-table-column min-width="150" prop="name"
                   label="Name">
  </el-table-column>
  <el-table-column min-width="200" prop="job"
                   label="Job Position">
  </el-table-column>
  <el-table-column min-width="150" prop="salary"
                   label="Salary">
  </el-table-column>
  <el-table-column min-width="150"
                   header-align="right"
                   label="Actions">
    <div slot-scope="{row}" class="text-right">
      <el-tooltip content="Info"
                  :open-delay="300"
                  placement="top">
        <p-button type="info" size="sm" icon>
          <i class="nc-icon nc-alert-circle-i"></i>
        </p-button>
      </el-tooltip>


      <el-tooltip content="Settings"
                  :open-delay="300"
                  placement="top">
        <p-button type="success" size="sm" icon>
          <i class="nc-icon nc-settings"></i>
        </p-button>
      </el-tooltip>

      <el-tooltip content="Delete"
                  :open-delay="300"
                  placement="top">
        <p-button type="danger" size="sm" icon>
          <i class="nc-icon nc-simple-delete"></i>
        </p-button>
      </el-tooltip>

    </div>
  </el-table-column>
</el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
            id: 1,
            name: 'Dakota Rice',
            salary: '$36.738',
            country: 'Niger',
            city: 'Oud-Turnhout'
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            salary: '$23,789',
            country: 'Curaçao',
            city: 'Sinaai-Waas'
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            salary: '$56,142',
            country: 'Netherlands',
            city: 'Baileux'
          },
          {
            id: 4,
            name: 'Philip Chaney',
            salary: '$38,735',
            country: 'Korea, South',
            city: 'Overland Park'
          },
          {
            id: 5,
            name: 'Doris Greene',
            salary: '$63,542',
            country: 'Malawi',
            city: 'Feldkirchen in Kärnten'
          }]
      }
    }
  }
</script>
```
:::

### Table with switches

:::demo
```html
<template>
<el-table class="table-striped"
          :data="tableData">
  <el-table-column type="index">

  </el-table-column>
  <el-table-column prop="name"
                   label="Name">
  </el-table-column>
  <el-table-column prop="job"
                   label="Job Position">
  </el-table-column>
  <el-table-column prop="salary"
                   label="Salary">
  </el-table-column>
  <el-table-column
    label="Active">
    <template slot-scope="props">
      <p-switch v-model="props.row.active" color="black"></p-switch>
    </template>
  </el-table-column>
</el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: 'Andrew Mike',
          job: 'Develop',
          salary: '€ 99,225',
          active: false
        }, {
          name: 'John Doe',
          job: 'Design',
          salary: '€ 89,241',
          active: false
        }, {
          name: 'Alex Mike',
          job: 'Design',
          salary: '€ 92,144',
          active: false
        }, {
          name: 'Mike Monday',
          job: 'Marketing',
          salary: '€ 49,990',
          active: true
        },
        {
          name: 'Paul dickens',
          job: 'Communication',
          salary: '€ 69,201',
          active: true
        }]
      }
    }
  }
</script>
```
:::

### Shopping table

:::demo
```html
<template>
<el-table style="width: 100%"
              :data="productsTable">
  <el-table-column min-width="220">
    <div slot-scope="{row}" class="img-container">
      <img :src="row.image" alt="Agenda">
    </div>
  </el-table-column>
  <el-table-column min-width="220" label="Product">
    <div class="td-name" slot-scope="{row}">
      <a href="#jacket">{{row.title}}</a>
      <br>
      <small>{{row.description}}</small>
    </div>
  </el-table-column>
  <el-table-column min-width="180" label="Color" prop="color"></el-table-column>
  <el-table-column min-width="100" label="Size" prop="size"></el-table-column>
  <el-table-column min-width="200" label="Price">
    <div slot-scope="{row}" class="td-number">
      <small>€</small>
      {{row.price}}
    </div>
  </el-table-column>
  <el-table-column min-width="200" label="Quantity">
    <div slot-scope="{row}" class="td-number">
      {{row.quantity}}
      <div class="btn-group">
        <p-button type="info" size="sm" @click.native="decreaseQuantity(row)">
          <i class="nc-icon nc-simple-delete"></i>
        </p-button>
        <p-button type="info" size="sm" @click.native="increaseQuantity(row)">
          <i class="nc-icon nc-simple-add"></i>
        </p-button>
      </div>
    </div>
  </el-table-column>
  <el-table-column min-width="200" label="Amount">
    <div slot-scope="{row}" class="td-number">
      <small>€</small>
      {{row.amount}}
    </div>
  </el-table-column>
  <el-table-column min-width="100" label="">
    <div slot-scope="{row}" class="td-actions">
      <p-button type="danger" size="sm" simple icon>
        <i class="nc-icon nc-simple-delete"></i>
      </p-button>
    </div>
  </el-table-column>
</el-table>
</template>

<script>
  export default {
    data() {
      return {
       productsTable: [
         {
           image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/saint-laurent.jpg',
           title: 'Suede Biker Jacket ',
           description: 'by Saint Laurent',
           color: 'Black',
           size: 'M',
           price: 3390,
           quantity: 1,
           amount: 3390
         },
         {
           image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/balmain.jpg',
           title: 'Jersey T-Shirt',
           description: 'by Balmain',
           color: 'Black',
           size: 'M',
           price: 499,
           quantity: 2,
           amount: 998
         },
         {
           image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/prada.jpg',
           title: '\tSlim-Fit Swim Short ',
           description: 'by Prada',
           color: 'Red',
           size: 'M',
           price: 200,
           quantity: 1,
           amount: 200
         }
       ]

      }
    },
    methods: {
      increaseQuantity(row) {
        row.quantity++;
        this.computeAmount(row);
      },
      decreaseQuantity(row) {
        if (row.quantity > 1) {
          row.quantity--;
          this.computeAmount(row);
        }
      },
      computeAmount(row) {
        row.amount = row.quantity * row.price;
      },
    }
  }
</script>
```
:::


<script>
  module.exports = {
     data () {
      return {
        productsTable: [
             {
               image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/saint-laurent.jpg',
               title: 'Suede Biker Jacket ',
               description: 'by Saint Laurent',
               color: 'Black',
               size: 'M',
               price: 3390,
               quantity: 1,
               amount: 3390
             },
             {
               image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/balmain.jpg',
               title: 'Jersey T-Shirt',
               description: 'by Balmain',
               color: 'Black',
               size: 'M',
               price: 499,
               quantity: 2,
               amount: 998
             },
             {
               image: 'http://vuejs.creative-tim.com/vue-now-ui-dashboard-pro/documentation/img/prada.jpg',
               title: '\tSlim-Fit Swim Short ',
               description: 'by Prada',
               color: 'Red',
               size: 'M',
               price: 200,
               quantity: 1,
               amount: 200
             }
           ],
          tableData: [{
             name: 'Andrew Mike',
             job: 'Develop',
             salary: '€ 99,225',
             active: false
           }, {
             name: 'John Doe',
             job: 'Design',
             salary: '€ 89,241',
             active: false
           }, {
             name: 'Alex Mike',
             job: 'Design',
             salary: '€ 92,144',
             active: false
           }, {
             name: 'Mike Monday',
             job: 'Marketing',
             salary: '€ 49,990',
             active: true
           },
           {
             name: 'Paul dickens',
             job: 'Communication',
             salary: '€ 69,201',
             active: true
           }]
      }
    },
    methods: {
          increaseQuantity(row) {
            row.quantity++;
            this.computeAmount(row);
          },
          decreaseQuantity(row) {
            if (row.quantity > 1) {
              row.quantity--;
              this.computeAmount(row);
            }
          },
          computeAmount(row) {
            row.amount = row.quantity * row.price;
          },
        }
  }
</script>

<style>
.btn.btn-icon + .btn.btn-icon {
  margin-left: 5px;
}
</style>
