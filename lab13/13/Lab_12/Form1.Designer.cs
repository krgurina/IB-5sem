namespace Lab_12
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.stegOpenFile = new System.Windows.Forms.Button();
            this.stegText = new System.Windows.Forms.TextBox();
            this.stegButton = new System.Windows.Forms.Button();
            this.deStegOpenFile = new System.Windows.Forms.Button();
            this.deStegText = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // stegOpenFile
            // 
            this.stegOpenFile.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.stegOpenFile.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.stegOpenFile.Location = new System.Drawing.Point(21, 20);
            this.stegOpenFile.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.stegOpenFile.Name = "stegOpenFile";
            this.stegOpenFile.Size = new System.Drawing.Size(223, 54);
            this.stegOpenFile.TabIndex = 4;
            this.stegOpenFile.Text = "Выберите фото";
            this.stegOpenFile.UseVisualStyleBackColor = false;
            this.stegOpenFile.Click += new System.EventHandler(this.openFile_Click);
            // 
            // stegText
            // 
            this.stegText.Location = new System.Drawing.Point(262, 52);
            this.stegText.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.stegText.Name = "stegText";
            this.stegText.Size = new System.Drawing.Size(409, 22);
            this.stegText.TabIndex = 6;
            // 
            // stegButton
            // 
            this.stegButton.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.stegButton.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.stegButton.Location = new System.Drawing.Point(21, 90);
            this.stegButton.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.stegButton.Name = "stegButton";
            this.stegButton.Size = new System.Drawing.Size(650, 54);
            this.stegButton.TabIndex = 7;
            this.stegButton.Text = "Зашифровать";
            this.stegButton.UseVisualStyleBackColor = false;
            this.stegButton.Click += new System.EventHandler(this.stegButton_Click);
            // 
            // deStegOpenFile
            // 
            this.deStegOpenFile.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.deStegOpenFile.ForeColor = System.Drawing.SystemColors.ButtonHighlight;
            this.deStegOpenFile.Location = new System.Drawing.Point(21, 297);
            this.deStegOpenFile.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.deStegOpenFile.Name = "deStegOpenFile";
            this.deStegOpenFile.Size = new System.Drawing.Size(650, 54);
            this.deStegOpenFile.TabIndex = 10;
            this.deStegOpenFile.Text = "Расшифровать";
            this.deStegOpenFile.UseVisualStyleBackColor = false;
            this.deStegOpenFile.Click += new System.EventHandler(this.deStegOpenFile_Click);
            // 
            // deStegText
            // 
            this.deStegText.Location = new System.Drawing.Point(21, 399);
            this.deStegText.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.deStegText.Name = "deStegText";
            this.deStegText.Size = new System.Drawing.Size(650, 22);
            this.deStegText.TabIndex = 11;
            this.deStegText.TextChanged += new System.EventHandler(this.deStegText_TextChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(259, 20);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(138, 16);
            this.label1.TabIndex = 12;
            this.label1.Text = "Введите сообщение";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(18, 372);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(198, 16);
            this.label2.TabIndex = 12;
            this.label2.Text = "Расшифрованное сообщение";
            this.label2.Click += new System.EventHandler(this.label2_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.ClientSize = new System.Drawing.Size(715, 703);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.deStegText);
            this.Controls.Add(this.deStegOpenFile);
            this.Controls.Add(this.stegButton);
            this.Controls.Add(this.stegText);
            this.Controls.Add(this.stegOpenFile);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "lab13";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button stegOpenFile;
        private System.Windows.Forms.TextBox stegText;
        private System.Windows.Forms.Button stegButton;
        private System.Windows.Forms.Button deStegOpenFile;
        private System.Windows.Forms.TextBox deStegText;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
    }
}

