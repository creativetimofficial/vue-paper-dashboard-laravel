<template>
  <tr>
    <td>
      <p-checkbox v-model="task.done">
      </p-checkbox>
    </td>
    <td class="img-row">
      <div class="img-wrapper">
        <img :src="task.img" class="img-raised" :alt="task.title">
      </div>
    </td>
    <td class="text-left">{{task.title}}</td>
    <td class="td-actions text-right">
      <el-tooltip content="Edit" placement="top">
        <p-button type="info" aria-label="edit button" round icon class="btn-icon-mini btn-neutral" @click="handleEditClick">
          <i class="nc-icon nc-ruler-pencil"></i>
        </p-button>
      </el-tooltip>
      <el-tooltip placement="top" content="Remove">
        <p-button type="danger" aria-label="remove button" round icon class="btn-icon-mini btn-neutral" @click="handleDeleteClick">
          <i class="nc-icon nc-simple-remove"></i>
        </p-button>
      </el-tooltip>
    </td>
  </tr>
</template>
<script>
  import { Tooltip } from 'element-ui'

  export default {
    components: {
      [Tooltip.name]: Tooltip
    },
    props: {
      task: {
        type: Object,
        default: () => {
          return {
            title: ''
          }
        }
      },
      index: Number
    },
    methods: {
      handleEditClick() {
        this.$emit('on-edit', this.index)
      },
      handleDeleteClick() {
        this.$emit('on-delete', this.index)
      }
    }
  }
</script>
<style>
</style>
