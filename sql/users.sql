USE [1d]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_updatedAt]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_createdAt]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_following]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_followers]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_stars]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_status]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_conventions]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_countryCode]
GO

ALTER TABLE [dbo].[users] DROP CONSTRAINT [DF_users_emailVerified]
GO

/****** Object:  Table [dbo].[users]    Script Date: 11/13/2022 9:15:37 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[users]') AND type in (N'U'))
DROP TABLE [dbo].[users]
GO

/****** Object:  Table [dbo].[users]    Script Date: 11/13/2022 9:15:37 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](16) NOT NULL,
	[password] [nvarchar](255) NULL,
	[email] [nvarchar](255) NOT NULL,
	[emailVerified] [bit] NULL,
	[googleId] [nvarchar](255) NULL,
	[facebookId] [nvarchar](255) NULL,
	[twitterId] [nvarchar](255) NULL,
	[countryCode] [nvarchar](2) NULL,
	[profilePic] [nvarchar](255) NULL,
	[conventions] [nvarchar](255) NULL,
	[status] [int] NULL,
	[stars] [int] NULL,
	[followers] [int] NULL,
	[following] [int] NULL,
	[createdAt] [date] NULL,
	[updatedAt] [date] NULL,
 CONSTRAINT [PK__users__3213E83F32E0915F] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_emailVerified]  DEFAULT ((0)) FOR [emailVerified]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_countryCode]  DEFAULT (N'US') FOR [countryCode]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_conventions]  DEFAULT (N'SAYC: txf stayman blkwood0314') FOR [conventions]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_status]  DEFAULT ((0)) FOR [status]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_stars]  DEFAULT ((0)) FOR [stars]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_followers]  DEFAULT ((0)) FOR [followers]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_following]  DEFAULT ((0)) FOR [following]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_createdAt]  DEFAULT (getutcdate()) FOR [createdAt]
GO

ALTER TABLE [dbo].[users] ADD  CONSTRAINT [DF_users_updatedAt]  DEFAULT (getutcdate()) FOR [updatedAt]
GO


