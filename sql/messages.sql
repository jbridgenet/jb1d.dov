USE [1d]
GO

ALTER TABLE [dbo].[messages] DROP CONSTRAINT [DF_messages_createdAt]
GO

/****** Object:  Table [dbo].[messages]    Script Date: 11/13/2022 9:16:25 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[messages]') AND type in (N'U'))
DROP TABLE [dbo].[messages]
GO

/****** Object:  Table [dbo].[messages]    Script Date: 11/13/2022 9:16:25 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[messages](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[room] [nvarchar](16) NOT NULL,
	[sender] [nvarchar](16) NULL,
	[receiver] [nvarchar](16) NULL,
	[data] [nvarchar](255) NOT NULL,
	[type] [nvarchar](10) NULL,
	[createdAt] [datetime2](7) NULL,
 CONSTRAINT [PK_messages] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[messages] ADD  CONSTRAINT [DF_messages_createdAt]  DEFAULT (getutcdate()) FOR [createdAt]
GO


