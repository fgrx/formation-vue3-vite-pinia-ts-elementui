<script lang="ts" setup>
import { dateInFrench, mediaInFrench } from "@/composables/useRessource";
import useAdmin from "@/composables/useAdmin";

const { validRessources, deleteRessourceAction } = useAdmin();
</script>

<template>
  <el-card>
    <h2>Management</h2>

    <el-table :data="validRessources">
      <el-table-column>
        <template #default="scope">
          {{ dateInFrench(scope.row.date) }}
        </template>
      </el-table-column>
      <el-table-column prop="title" />
      <el-table-column>
        <template #default="scope">
          {{ mediaInFrench(scope.row.media) }}
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <a :href="scope.row.url" target="blank">
            <el-button>Voir</el-button>
          </a>
        </template>
      </el-table-column>
      <el-table-column>
        <template #default="scope">
          <el-button @click="deleteRessourceAction(scope.row)" type="danger"
            >Supprimer</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style>
.el-card {
  margin-top: 2em;
}
</style>
