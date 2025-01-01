
<template>
  <v-app>
    <v-container>
      <!-- Fixed Buttons -->
      <v-row class="fixed-buttons">
        <v-btn color="primary" class="mb-2" block @click="autoLogin">
          <v-icon left>mdi-login</v-icon> Auto Login
        </v-btn>
        <v-btn color="info" class="mb-2" block @click="editLogin">
          <v-icon left>mdi-pencil</v-icon> Edit Login Data
        </v-btn>
        <v-btn color="success" block @click="refreshToken">
          <v-icon left>mdi-refresh</v-icon> Refresh Token
        </v-btn>
      </v-row>

      <!-- Swagger UI -->
      <v-row justify="center" class="swagger-container mt-5">
        <v-col cols="12" md="12">
          <div id="swagger-ui"></div>
        </v-col>
      </v-row>

      <!-- Login Modal -->
      <v-dialog v-model="dialog" max-width="400">
        <v-card class="modal-container">
          <v-card-title class="d-flex justify-center align-center">
            <v-icon size="36" color="primary" class="mr-2">mdi-account-edit</v-icon>
            <span class="text-h6 font-weight-bold">Edit Login Data</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="loginData.email_or_phone_number"
                label="Email or Phone"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="loginData.password"
                label="Password"
                type="password"
                outlined
                dense
                required
              ></v-text-field>
              <v-checkbox v-model="loginData.remember_me" label="Remember Me"></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn color="success" dark class="mr-2" @click="saveLogin">Save</v-btn>
            <v-btn color="error" dark @click="dialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Error Snackbar -->
      <v-snackbar v-model="errorSnackbar" color="error" timeout="5000">
        <v-icon left dark>mdi-alert-circle</v-icon> {{ errorMessage }}
        <v-btn text @click="errorSnackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-app>
</template>

<script>
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

export default {
  data() {
    return {
      dialog: false,
      errorSnackbar: false,
      errorMessage: "",
      loginData: {
        email_or_phone_number: "admin@example.com",
        password: "TesPassword123",
        remember_me: false,
      },
      swaggerUi: null,
    };
  },
  mounted() {
    this.swaggerUi = SwaggerUI({
      url: "openapi.yaml",
      dom_id: "#swagger-ui",
      docExpansion: "list",
      deepLinking: true,
      requestInterceptor: (req) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          req.headers["Authorization"] = `Bearer ${token}`;
        }
        return req;
      },
    });
  },
  methods: {
    async autoLogin() {
      try {
        const response = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.loginData),
        });
        const result = await response.json();
        if (result.status) {
          localStorage.setItem("access_token", result.data.access_token);
          this.swaggerUi.preauthorizeApiKey("BearerAuth", result.data.access_token);
        } else {
          this.showError(result.message || "Login failed");
        }
      } catch (error) {
        this.showError(error.message || "An error occurred during login");
      }
    },
    async refreshToken() {
      try {
        const response = await fetch("http://localhost:8000/api/v1/auth/refresh", {
          method: "POST",
        });
        const result = await response.json();
        if (result.status) {
          localStorage.setItem("access_token", result.data.access_token);
          this.swaggerUi.preauthorizeApiKey("BearerAuth", result.data.access_token);
        } else {
          this.showError(result.message || "Token refresh failed");
        }
      } catch (error) {
        this.showError(error.message || "An error occurred during token refresh");
      }
    },
    editLogin() {
      this.dialog = true;
    },
    saveLogin() {
      this.dialog = false;
    },
    showError(message) {
      this.errorMessage = message;
      this.errorSnackbar = true;
    },
  },
};
</script>

<style>
/* Fixed Buttons Styling */
.fixed-buttons {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  width: 200px;
}

/* Swagger UI Styling */
.swagger-container {
  border: 1px solid #f7f7f7;
  border-radius: 8px;
  padding: 20px;
}

/* Modal Styling */
.modal-container {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
}
</style>
